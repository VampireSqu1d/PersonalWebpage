class UIButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, hoverkey, text, targetCallBack){
        super(scene, x, y);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.key = key;
        this.hoverkey = hoverkey;
        this.text = text;
        this.targetCallBack = targetCallBack;
        this.createButton();
        this.scene.add.existing(this);
    }
    createButton() {
        this.button = this.scene.add.image(0, 0, "button1");
        this.button.setInteractive();
        this.button.setOrigin(0.5);
        this.button.setScale(1.4);
        this.buttonText = this.scene.add.text(0, 0, this.text, {
            fontSize: "36px",
            fill: "#fff"
        });
        Phaser.Display.Align.In.Center(this.buttonText, this.button);
        this.add(this.button);
        this.add(this.buttonText);
        // listen for events
        this.button.on("pointerdown", ()=>{
            this.targetCallBack();
        });
        this.button.on("pointerover", ()=>{
            this.button.setTexture(this.hoverkey);
        });
        this.button.on("pointerout", ()=>{
            this.button.setTexture(this.key);
        });
    }
}

//# sourceMappingURL=CarAnimation.50a38761.js.map
