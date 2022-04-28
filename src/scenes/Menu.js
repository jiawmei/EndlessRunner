class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene');
    }
    
    create(){
        let titleConfig = {
            fontFamily: 'Arial',
            fontSize: '40px',
            color: "#FFFFFF",
            align: "center"
        }
        let selectionConfig = {
            fontFamily: "Arial",
            fontSize: '20px',
            color : '#FFFFFF',
            align: 'center'
        }
        this.add.text(500, 200, "Run Away From Religious Guy", titleConfig).setOrigin(0.5);
        this.add.text(500, 500, "Press Enter to Start", selectionConfig).setOrigin(0.5);

        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update(){
        /*if(Phaser.Input.KeyBoard.JustDown(keyEnter)){
            this.scene.start('playScene');
        }*/
    }
}