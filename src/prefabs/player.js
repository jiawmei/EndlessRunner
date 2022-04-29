class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.physics.add.existing(this);
        this.scene.add.existing(this);
        this.setPushable(true);
        this.setGravityY(gameOptions.playerGravity);
        this.isJumping = true;
    }

    create() {
        this.setVelocity(100, 200);
        this.setPushable(false);
        this.setGravityY(gameOptions.playerGravity);
        this.isJumping = true;
    }

    update() {
        this.setVelocityX(0);

        if (!this.isJumping && Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isJumping = true;
            this.setVelocityY(gameOptions.jumpForce * -1);
        }

        if (this.body.touching.down) {
            this.setVelocityX(gameOptions.platformStartSpeed);
            this.isJumping = false;
        }
    }
    
}