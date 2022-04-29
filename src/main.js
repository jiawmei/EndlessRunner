let config = {
    type: Phaser.CANVAS,
    width: 1334,
    height: 750,
    scene: [ Play ],

    physics: {
        default: "arcade"
    }
}

let game = new Phaser.Game(config);

let keyF;

let gameOptions = {
    platformStartSpeed: 400,
    spawnRange: [150, 400],
    platformSizeRange: [100, 300],
    playerGravity: 900,
    jumpForce: 400,
    playerStartPosition: 200
}