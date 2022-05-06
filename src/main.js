// Collaborators: Kevin Khau, Uni Huang, Jia Mei
// Game Title: Escape From Wonderland
// Date Completed: 6 May 2022
//
// Creative Tilt Justification: *add something

let config = {
    type: Phaser.CANVAS,
    width: 1334,
    height: 750, 
    scene: [ Menu, Play , End ],

    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    }
}

let game = new Phaser.Game(config);

let keyUp, keyDown, keyEnter;

let randomNumb2 = 0;
let score = 0;
let secondss = 0;
let highScore = 0;
let gameOptions = {
    platformStartSpeed: 1000,
    spawnRange: [150, 400],
    platformSizeRange: [200, 300],
    playerGravity: 2250,
    jumpForce: 900,
    playerStartPosition: 3 *config.width / 4,
    currSpeed: 0,
    jumps: 1
}