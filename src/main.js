let config = {
    type: Phaser.CANVAS,
    width: 1000,
    height: 750,
    scene: [ Menu ]
}

let game = new Phaser.Game(config);

let keyUP, keyDown, keyEnter;
