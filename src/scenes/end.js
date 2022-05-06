class End extends Phaser.Scene {
    constructor(){
        super("endScene");
    }
    preload(){
        this.load.image("morning", "./assets/Morning-01.png");
        this.load.image("afternoon", "./assets/Afternoon-01.png");
        this.load.image("night", "./assets/Night-01.png");
    }

    create(){
        if(randomNumb2 == 0){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'morning').setOrigin(0,0);

        }
        
        if(randomNumb2 == 1){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'afternoon').setOrigin(0,0);
        }
        
        if(randomNumb2 == 2){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'night').setOrigin(0,0);
        }

        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        let titleConfig = {
            fontFamily: 'Arial',
            fontSize: '40px',
            color: "#FF0000",
            align: "center"
        }
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
            backgroundColor: '#000000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            //fixedWidth: 100
        }
        this.add.text(667, game.config.height/5, 'GAME OVER', titleConfig).setOrigin(0.5);
        this.add.text(570, game.config.height/3, 'Score:', scoreConfig);
        this.add.text(670, game.config.height/3, score, scoreConfig);
        this.add.text(450, game.config.height/4, "Time Survived: " + secondss + ' seconds', scoreConfig2);
        this.add.text(560, 310, "High Score: " + highScore, scoreConfig2);
        this.add.text(500, 620, "Press ENTER to Restart", scoreConfig2);
        
    }

    update(){
        this.background.tilePositionX += 1.5;
        if (Phaser.Input.Keyboard.JustDown(keyEnter)){
            console.log('TEST');
            score = 0;
            this.scene.start('playScene');
        }
    }
}