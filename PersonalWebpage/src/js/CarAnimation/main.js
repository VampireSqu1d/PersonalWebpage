const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 192,
    scene: [
        BootScene,
        TitleScene,
        UIScene,
        GameScene,
    ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y:  0,
            }
        }
    },
};

const game = new Phaser.Game(config);