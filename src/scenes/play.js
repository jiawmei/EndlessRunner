class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image("platform", "./assets/Ground1.png");
        this.load.image("player", "./assets/player.png");
        this.load.image("arrow", "./assets/arrow.png");
        this.load.image("background", "./assets/Morning-01.png");
        this.load.image("boy", "./assets/boy.png");
        this.load.image("ground1", "./assets/Ground1.png");
        //this.load.image("girl", "./assets/girl.png");
    }

    create() {
    
        //make the background
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0,0);

        //setting the current speed to starting speed
        gameOptions.currSpeed = gameOptions.platformStartSpeed;
        
        //make the ground
        this.platform = this.physics.add.sprite(game.config.width / 2, game.config.height * 0.8, "ground1");
        this.platform.displayWidth = game.config.width;
        this.platform.displayHeight = 50;
        this.platform.setImmovable(true);

        //make the player
        this.player = new Player(this, gameOptions.playerStartPosition, game.config.height / 2, "boy");
        
        //set collision
        this.physics.add.collider(this.player, this.platform);

        //assign keys
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        //speed up timer
        this.timer = this.time.addEvent({
            delay: 3000,
            callback: this.speedUp,
            callbackScope: this,
            loop: true
        });

        //spawns random arrows
        this.arrowTimer = this.time.addEvent({
            delay: 1000,
            callback: this.spawnArrow,
            callbackScope: this,
            loop: true
        });        
    }

    //spawns an arrow at a random height
    spawnArrow() {
        this.arrow = new Arrow(this, 0, game.config.height -Phaser.Math.Between(gameOptions.platformSizeRange[0], gameOptions.platformSizeRange[1]), "arrow");
        //set arrow to current speed
        this.arrow.setVelocityX(gameOptions.currSpeed);
        //scale down the arrow
        this.arrow.setDisplaySize(70, 30);
        this.arrow.setSize(50, 20);
        //when colliding with an arrow
        this.physics.add.collider(this.player, this.arrow, function(player) {
            player.gameOver = true;
        }); 
        //change the timing of arrows
        this.arrowTimer.reset({
            delay: Phaser.Math.Between(500, 1000),
            callback: this.spawnArrow,
            callbackScope: this,
            loop: true
        });
    }

    //increases the current speed
    speedUp() {
       gameOptions.currSpeed *= 1.05;
    }
    
    update() {
        this.background.tilePositionX -= 2;
        let textConfig = {
            fontFamily: 'Arial',
            fontSize: '40px',
            color: "#C603FC",
            align: "center"
        }
        if (this.player.gameOver) {
            this.timer.remove();
            this.arrowTimer.remove();
            //this.scene.start("playScene");
            //this.background.tilePositionX -= 0;
            //this.add.text(700,200, "You Lose", textConfig).setOrigin(0.5);
            console.log("lose");
            this.scene.restart();
        }
        

        if (!this.player.gameOver) {
            this.player.update();
        }

    }

}