class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image("platform", "./assets/platform.png");
        this.load.image("player", "./assets/player.png");
    }

    create() {
        this.platformGroup = this.add.group({

            removeCallback: function(platform) {
                platform.scene.platformPool.add(platform);
            }
        });

        this.platformPool = this.add.group({

            removeCallback: function(platform) {
                platform.scene.platformGroup.add(platform);
            }
        });

        this.addPlatform(game.config.width, game.config.width / 2);

        this.player = new Player(this, gameOptions.playerStartPosition, game.config.height / 2, "player");
        this.player.setPushable(false);
        this.physics.add.collider(this.player, this.platformGroup);

        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }
    
    update() {
        if (this.player.y > game.config.height) {
            this.scene.start("playScene");
        }

        this.player.update();

        let minDistance = game.config.width;
        this.platformGroup.getChildren().forEach(function(platform) {
            let platformDistance = game.config.width - platform.x - platform.displayWidth / 2;
            minDistance = Math.min(minDistance, platformDistance);
            if (platform.x < - platform.displayWidth / 2) {
                this.platformGroup.killAndHide(platform);
                this.platformGroup.remove(platform);
            }
        }, this);

        if (minDistance > this.nextPlatformDistance) {
            var nextPlatformWidth = Phaser.Math.Between(gameOptions.platformSizeRange[0], gameOptions.platformSizeRange[1]);
            this.addPlatform(nextPlatformWidth, game.config.width + nextPlatformWidth / 2);
        }
    }

    addPlatform(platformWidth, posX){
        let platform;
        if(this.platformPool.getLength()){
            platform = this.platformPool.getFirst();
            platform.x = posX;
            platform.active = true;
            platform.visible = true;
            this.platformPool.remove(platform);
        }
        else{
            platform = this.physics.add.sprite(posX, game.config.height * 0.8, "platform");
            //platform.setImmovable(true);
            platform.setPushable(false);
            platform.setVelocityX(gameOptions.platformStartSpeed * -1);
            this.platformGroup.add(platform);
        }
        platform.displayWidth = platformWidth;
        this.nextPlatformDistance = Phaser.Math.Between(gameOptions.spawnRange[0], gameOptions.spawnRange[1]);
    }
}