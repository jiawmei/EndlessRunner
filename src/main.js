// Collaborators: Kevin Khau, Uni Huang, Jia Mei
// Game Title: Escape From Wonderland
// Date Completed: 6 May 2022
//
// Creative Tilt Justification: One of the things that we included in our game was the random timing of arrows.
// The arrows would be launched at the player at random intervals and also at random heights in which the player
// would have to dodge. Also, another thing that we included was the ability to make your character fall faster
// by clicking the down button. For visual style, we sought to make this game very lighthearted and fun. The visuals
// were made to be very bright and pleasing to look at.

let config = {
    type: Phaser.CANVAS,
    width: 1334,
    height: 750, 
    scene: [ Menu, Play , End ],

    physics: {
        default: "arcade",
        arcade: {
            debug: false
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