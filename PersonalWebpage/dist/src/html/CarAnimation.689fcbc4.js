class PlayerCar extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, key, frame){
        super(scene, x, y, key, frame);
        this.scene = scene; // the scene the chest will be added to
        this.velocity = 160; // the velocity when the player is moving
        const fps = 6;
        this.scene.physics.world.enable(this); // enable physics
        this.setImmovable(false); // set immovable if other object collides with the player
        this.setCollideWorldBounds(true); // so the player is never out of camera
        //here I create all the animations for the car
        this.anims.create({
            key: "hover",
            frames: this.anims.generateFrameNames("characterCar", {
                start: 0,
                end: 2
            }),
            frameRate: fps,
            repeat: -1
        });
        this.anims.create({
            key: "movingRight",
            frames: this.anims.generateFrameNames("characterCarMoving", {
                start: 6,
                end: 8
            }),
            frameRate: fps,
            repeat: -1
        });
        this.anims.create({
            key: "movingLeft",
            frames: this.anims.generateFrameNames("characterCarMoving", {
                start: 3,
                end: 5
            }),
            frameRate: fps,
            repeat: -1
        });
        this.anims.create({
            key: "movingUp",
            frames: this.anims.generateFrameNames("characterCarMoving", {
                start: 9,
                end: 11
            }),
            frameRate: fps,
            repeat: -1
        });
        this.anims.create({
            key: "movingDown",
            frames: this.anims.generateFrameNames("characterCarMoving", {
                start: 0,
                end: 2
            }),
            frameRate: fps,
            repeat: -1
        });
        this.anims.play("hover"); // playing the animation for hovering
        this.scene.add.existing(this); // adding player to the scene
    }
    update(cursors) {
        this.body.setVelocity(0); // so the  player stops moving
        //checks for the player to move left and right
        if (cursors.left.isDown) {
            this.anims.play("movingLeft", true);
            this.body.setVelocityX(-this.velocity);
        } else if (cursors.right.isDown) {
            this.anims.play("movingRight", true);
            this.body.setVelocityX(this.velocity);
        }
        //checks for the player to move up and down
        if (cursors.up.isDown) {
            this.anims.play("movingUp", true);
            this.body.setVelocityY(-this.velocity);
        } else if (cursors.down.isDown) {
            this.anims.play("movingDown", true);
            this.body.setVelocityY(this.velocity);
        }
    }
}

//# sourceMappingURL=CarAnimation.689fcbc4.js.map
