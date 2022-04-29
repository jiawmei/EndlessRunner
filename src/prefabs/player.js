class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.physics.add.existing(this);
        this.scene.add.existing(this);
        this.setGravityY(gameOptions.playerGravity);
        this.isJumping = true;
        //fthis.setPushable(false);
    }

    update() {
        //this.x = gameOptions.playerStartPosition;

        if (!this.isJumping && Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isJumping = true;
            this.setVelocityY(gameOptions.jumpForce * -1);
        }

        if (this.body.touching.down) {
            this.isJumping = false;
        }
    }
    
}