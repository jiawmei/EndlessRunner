let config = {
    type: Phaser.CANVAS,
    width: 1000,
    height: 100,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
