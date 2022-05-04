class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.physics.add.existing(this);
        this.scene.add.existing(this);
        this.setGravityY(gameOptions.playerGravity);
        this.isJumping = true;
        this.playerJumps = 0;
        //game over flag
        this.gameOver = false;
    }

    update() {
        var isDown = keyDown.isDown;

        if (Phaser.Input.Keyboard.JustDown(keyUp)) {
            this.jump();
        }

        if (this.body.touching.down) {
            this.isJumping = false;
        }
    }

    jump(){
        if(this.body.touching.down || (this.playerJumps > 0 && this.playerJumps < gameOptions.jumps)){
            if(this.body.touching.down){
                this.playerJumps = 0;
            }
            this.setVelocityY(gameOptions.jumpForce * -1);
            this.playerJumps ++;
        }
    }
    
}