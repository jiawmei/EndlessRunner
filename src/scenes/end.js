class End extends Phaser.Scene {
    constructor(){
        super("endScene");
    }
    preload(){
        this.load.image("morning", "./assets/Morning-01.png");
        this.load.image("afternoon", "./assets/Afternoon-01.png");
        this.load.image("night", "./assets/Night-01.png");
        this.load.audio('bgm', './assets/BGM.wav');
    }

    create(){
        if(randomNumb == 0){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'morning').setOrigin(0,0);

        }
        
        if(randomNumb == 1){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'afternoon').setOrigin(0,0);
        }
        
        if(randomNumb == 2){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'night').setOrigin(0,0);
        }
        
        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        let titleConfig = {
            fontFamily: 'Arial',
            fontSize: '40px',
            color: "#FFFFFF",
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
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.add.text(667, game.config.height/5, 'GAME OVER', titleConfig).setOrigin(0.5);
        this.add.text(570, game.config.height/4, 'Score:', scoreConfig);
        let scoreText = this.add.text(670, game.config.height/4, score, scoreConfig);
    }

    update(){
        this.background.tilePositionX += 1.5;
        if (Phaser.Input.Keyboard.JustDown(keyEnter)){
            score = 0;
            this.scene.start('playScene');
        }
    }
}