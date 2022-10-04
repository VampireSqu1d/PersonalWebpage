class GameScene extends Phaser.Scene {
    constructor(){
        super("Game");
    }
    create() {
        this.createPlayer(100, 100);
        this.createInput();
        this.anims.create({
            key: "tableEnemy",
            frames: this.anims.generateFrameNames("MonsterTable", {
                start: 0,
                end: 5
            }),
            frameRate: 5,
            repeat: -1
        });
        const MonsterOnTable = this.add.sprite(450, 300, "MonsterTable", 0);
        MonsterOnTable.setScale(0.5);
        MonsterOnTable.play("tableEnemy");
        this.anims.create({
            key: "heartbeat",
            frames: this.anims.generateFrameNames("Heartbeat", {
                start: 0,
                end: 11
            }),
            frameRate: 12,
            repeat: -1
        });
        const beat = this.add.sprite(410, 295, "Heartbeat", 0);
        beat.setScale(0.7);
        beat.play("heartbeat");
        this.anims.create({
            key: "monitor",
            frames: this.anims.generateFrameNames("Monitor", {
                start: 0,
                end: 2
            }),
            frameRate: 3,
            repeat: -1
        });
        const moni = this.add.sprite(510, 285, "Monitor", 0);
        moni.setScale(0.7);
        moni.play("monitor");
    /*this.anims.create({
           key: 'cast',
           frames: this.anims.generateFrameNames('Cast2', {start:0, end: 43}),
           frameRate: 60,
           repeat: -1,
        });

        const darks = this.add.sprite(500,500, 'Cast2', 0);
        darks.play('cast');*/ }
    update() {
        this.player.update(this.cursors);
    }
    createPlayer(x, y) {
        this.player = new Player(this, x, y, "Player2", 1);
    }
    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }
}

//# sourceMappingURL=HospitalHorrorGame.7da86588.js.map
