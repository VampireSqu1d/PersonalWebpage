const config = {
    type: Phaser.CANVAS,
    backgroundColor: "#ffffff",
    width: 1000,
    height: 600,
    scene: [
        BootScene,
        TitleScene,
        GameScene, 
    ],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: {
                y: 10
            }
        }
    }
};
const game = new Phaser.Game(config);

//# sourceMappingURL=HospitalHorrorGame.a243f8dc.js.map
