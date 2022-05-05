class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    
    
    
    preload() {
        this.load.image("ground1", "./assets/Ground1.png");
        this.load.image("ground2", "./assets/Ground2.png");
        this.load.image("ground3", "./assets/Ground3.png");
        this.load.image("player", "./assets/player.png");
        this.load.image("arrow", "./assets/arrow.png");
        this.load.image("morning", "./assets/Morning-01.png");
        this.load.image("afternoon", "./assets/Afternoon-01.png");
        this.load.image("night", "./assets/Night-01.png");
        this.load.image("boy", "./assets/boyRight.png");
        //this.load.image("girl", "./assets/girl.png");

        this.load.spritesheet('hit', './assets/HIT.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create() {
        
        
        // generate a random background every time you play
        

        if(randomNumb == 0){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'morning').setOrigin(0,0);
            this.platform = this.physics.add.sprite(game.config.width / 2, game.config.height * 0.8, "ground3");
        }
        
        if(randomNumb == 1){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'afternoon').setOrigin(0,0);
            this.platform = this.physics.add.sprite(game.config.width / 2, game.config.height * 0.8, "ground2");
        }
        
        if(randomNumb == 2){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'night').setOrigin(0,0);
            this.platform = this.physics.add.sprite(game.config.width / 2, game.config.height * 0.8, "ground1");
        }
        

        //setting the current speed to starting speed
        gameOptions.currSpeed = gameOptions.platformStartSpeed;
        
        //play music
        
        
        //make the ground
        //this.platform = this.physics.add.sprite(game.config.width / 2, game.config.height * 0.8, "ground1");
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
            args: [this],
            callbackScope: this,
            loop: true
        });
        
        // scoreboard
        
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        let scoreConfig2 = {
            fontFamily: 'Courier',
            fontSize: '28px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.currentScore = this.add.text(1200, 50, score, scoreConfig);
        this.scoreText = this.add.text(1100, 50, "Score:", scoreConfig);
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
        
        // get a point every time a new arrow is spawned
        score += 1;
        this.currentScore.text = score;
    }

    //increases the current speed
    speedUp() {
       gameOptions.currSpeed *= 1.05;
    }
    
    update() {
        this.background.tilePositionX += 1.5;
        let textConfig = {
            fontFamily: 'Arial',
            fontSize: '40px',
            color: "#C603FC",
            align: "center"
        }
        if (this.player.gameOver) {
            this.timer.remove();
            this.arrowTimer.remove();
            //this.sound.removeAll();
            this.player.alpha = 0;
            console.log("lose");
            this.scene.start('endScene');
        }
        

        if (!this.player.gameOver) {
            this.player.update();
        }

    }

}