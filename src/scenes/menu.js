class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        this.load.image('title','./assets/FixedTitle.png');
        this.load.spritesheet('titlecharacter', './assets/boyNoArrowAnim.png', {frameWidth: 200, frameHeight: 200, startFrame: 0, endFrame: 2});
        this.load.audio('sfx_start', './assets/start1.wav');
        this.load.audio('sfx_jump', './assets/jump1.wav');
        this.load.audio('sfx_fall', './assets/jump2.wav');
        this.load.audio('sfx_hit', './assets/hit2.wav');
        this.load.audio('bgm', './assets/BGM.wav');
    }
    create() {
        //menu text configuration
        let titleConfig = {
            fontFamily: 'Arial',
            fontSize: '40px',
            color: "#C603FC",
            align: "center"
        }
        let selectionConfig = {
            fontFamily: "Arial",
            fontSize: '20px',
            color : "#8403FC",
            align: 'center'
        }
        
        //play music
        this.backgroundMusic = this.sound.add('bgm', {volume:0.1});
        this.backgroundMusic.setLoop(true);
        if(!this.backgroundMusic.isPlaying){
            this.backgroundMusic.play();
        }
        
        // background needs fixing
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'title').setOrigin(0,0);
        
        
        //define keys
        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    }
    
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyEnter)) {
            this.sound.play('sfx_start');
            this.scene.start('playScene');
        }
        
    }
}