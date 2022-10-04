class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    init() {
        this.scene.launch('UI');
    }

    create() {
        this.createBackground();
        this.createPlayer(100,100, 0);
        this.createInput();
        this.createMusic();
    }

    update() {
        this.player.update(this.cursors);
        this.city.tilePositionX += 1;
    }

    createMusic() {
        this.music = this.sound.add('theme');
        this.music.setVolume(0.5);
        this.music.play();
    }

    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    createBackground(){
        this.city = this.add.tileSprite(0,0, 1000, 192, 'CyberpunkBackground').setOrigin(0 ,0);
    }

    createPlayer(x, y, characterIndex) {
        this.player = new PlayerCar(this, x, y, 'characterCarMoving', characterIndex);
    }

}