let config = {
    type: Phaser.CANVAS,
    width: 1334,
    height: 750,
    scene: [ Menu, Play ],

    physics: {
        default: "arcade"
    }
}

let game = new Phaser.Game(config);

let keyUp, keyDown, keyEnter;

let gameOptions = {
    platformStartSpeed: 400,
    spawnRange: [150, 400],
    platformSizeRange: [100, 300],
    playerGravity: 1000,
    jumpForce: 400,
    playerStartPosition: 200,
    currSpeed: 0,
    jumps: 2
}