class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.physics.add.existing(this);
        this.scene.add.existing(this);
        this.setPushable(true);
        this.setGravityY(gameOptions.playerGravity);
        this.isJumping = true;
        this.playerJumps = 0;
    }

    update() {
        //this.setVelocityX(0);
        this.x = gameOptions.playerStartPosition;

        if (Phaser.Input.Keyboard.JustDown(keyUp)) {
            this.jump();
        }

        if (this.body.touching.down) {
            //this.setVelocityX(gameOptions.currSpeed);
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