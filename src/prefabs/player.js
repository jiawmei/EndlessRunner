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
        this.sfxJump = scene.sound.add('sfx_jump');
        this.sfxFall = scene.sound.add('sfx_fall');
    }

    update() {
        var isDown = keyDown.isDown;

        if (Phaser.Input.Keyboard.JustDown(keyUp)) {
            this.jump();
        }

        if (Phaser.Input.Keyboard.JustDown(keyDown)) {
            this.gravity();
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
            this.sfxJump.play();
            this.setVelocityY(gameOptions.jumpForce * -1);
            this.playerJumps ++;
        }
    }

    //pulls the player down
    gravity() {
        if (!this.body.touching.down) {
            this.setVelocityY(gameOptions.jumpForce);
            this.sfxFall.play();
        }
    }
    
}