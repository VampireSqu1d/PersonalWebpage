class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene;
        this.velocity = 240;
        const fps = 15;
        this.scene.physics.world.enable(this); // enable physics
        this.setScale(0.6);
        this.setImmovable(false);// set immovable if other object collides with the player
        this.setCollideWorldBounds(true);// so the player is never out of camera
        //here I create all the walking animations
        this.anims.create({
            key: 'walkDown',
            frames: this.anims.generateFrameNames('Player2', { start: 0, end: 2}),
            frameRate: fps,
        });

        this.anims.create({
            key: 'walkUp',
            frames: this.anims.generateFrameNames('Player2', { start: 9, end: 11}),
            frameRate: fps,
        });

        this.anims.create({
            key: 'walkRight',
            frames: this.anims.generateFrameNames('Player2', { start: 6, end: 8}),
            frameRate: fps,
        });

        this.anims.create({
            key: 'walkLeft',
            frames: this.anims.generateFrameNames('Player2', { start: 3, end: 5}),
            frameRate: fps,
        });

        this.anims.create({
            key: 'idleDown',
            frames: this.anims.generateFrameNames('Player2', { start: 1, end: 1}),
            frameRate: fps,
        });

        this.scene.add.existing(this);// adding player to the scene
    }

    update(cursors) {
        this.body.setVelocity(0);
        //checks for the player to move left and right
        if (cursors.left.isDown) {
            this.anims.play('walkLeft', true);
            this.body.setVelocityX(-this.velocity);
        } else if (cursors.right.isDown){
            this.anims.play('walkRight', true);
            this.body.setVelocityX(this.velocity);
        }
        //checks for the player to move up and down
         else if (cursors.up.isDown) {
            this.anims.play('walkUp', true);
            this.body.setVelocityY(-this.velocity);
        } else if (cursors.down.isDown){
            this.anims.play('walkDown', true);
            this.body.setVelocityY(this.velocity);
        }
         // this checks for the player to stop moving
         else {
            this.anims.play('idleDown', true);
            this.body.setVelocity(0);
        }
    }

}