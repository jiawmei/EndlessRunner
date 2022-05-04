let config = {
    type: Phaser.CANVAS,
    width: 1334, // backgrounds are 1920x1090, scale down
    height: 750, 
    scene: [ Menu, Play ],

    physics: {
        default: "arcade"
    }
}

let game = new Phaser.Game(config);

let keyUp, keyDown, keyEnter;

let gameOptions = {
    platformStartSpeed: 1000,
    spawnRange: [150, 400],
    platformSizeRange: [200, 300],
    playerGravity: 2250,
    jumpForce: 1000,
    playerStartPosition: config.width / 2,
    currSpeed: 0,
    jumps: 1
}