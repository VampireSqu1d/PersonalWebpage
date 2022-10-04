class TitleScene extends Phaser.Scene {
    constructor(){
        super("Title");
    }
    create() {
        this.titleText = this.add.text(this.scale.width * 0.5, this.scale.height * 0.35, "Car Animation Demo", {
            fontSize: "24px",
            fill: "#fff"
        });
        this.titleText.setOrigin(0.5);
        this.startGameButton = new UIButton(this, this.scale.width * 0.5, this.scale.height * 0.65, "button1", "button2", "Start", this.startScene.bind(this, "Game"));
    }
    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}

//# sourceMappingURL=CarAnimation.7078a8ac.js.map
