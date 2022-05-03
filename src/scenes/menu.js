class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        //menu text configuration
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

        //show menu text
        this.add.text(500, 200, "Run Away From Religious Guy", titleConfig).setOrigin(0.5);
        this.add.text(500, 500, "Press Enter to Start", selectionConfig).setOrigin(0.5);
        
        //define keys
        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyEnter)) {
            
            this.scene.start('playScene');
        }
        
    }
}