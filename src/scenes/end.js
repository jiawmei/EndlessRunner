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
        if(randomNumb == 0){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'morning').setOrigin(0,0);

        }
        
        if(randomNumb == 1){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'afternoon').setOrigin(0,0);
        }
        
        if(randomNumb == 2){
            this.background = this.add.tileSprite(0, 0, config.width, config.height, 'night').setOrigin(0,0);
        }
    }

    update(){
        this.background.tilePositionX += 1.5;
        if (Phaser.Input.Keyboard.JustDown(keyEnter)){
            this.scene.start('playScene');
        }
    }
}