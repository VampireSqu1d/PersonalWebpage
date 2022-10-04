class BootScene extends Phaser.Scene {
    constructor(){
        super("BootScene");
    }
    preload() {
        this.loadImages();
        this.loadSpriteSheets();
        this.loadSounds();
    }
    loadSounds() {
        this.load.audio("theme", "../../assets/CarDemo/audio/cyberpunk-street.wav");
    }
    loadImages() {
        this.load.image("button1", "../../assets/CarDemo/ui/blue_button01.png");
        this.load.image("button2", "../../assets/CarDemo/ui/blue_button02.png");
        this.load.image("CyberpunkBackground", "../../assets/CarDemo/Backgrounds/cyberpunk-street.png");
    }
    loadSpriteSheets() {
        this.load.spritesheet("characterCar", "../../assets/CarDemo/Character sprites/!$CC_redcar_idle.png", {
            frameWidth: 120,
            frameHeight: 113
        });
        this.load.spritesheet("characterCarMoving", "../../assets/CarDemo/Character sprites/!$CC_redcar_moving.png", {
            frameWidth: 120,
            frameHeight: 113
        });
    }
    create() {
        this.scene.start("Title");
    }
}

//# sourceMappingURL=CarAnimation.01717f9e.js.map
