class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        this.loadSpriteSheets()
    }

    loadImages() {

    }

    loadSpriteSheets() {
        // this is where all the spritesheets get preloaded into memory
        this.load.spritesheet('MonsterTable', "../../assets/HospitalGamesAssets/Characters/!$Monster_Gurney.png", {frameWidth: 144, frameHeight: 144});
        this.load.spritesheet('Player1', "../../assets/HospitalGamesAssets/Characters/$Dr Frankenstien.png", {frameWidth: 72, frameHeight: 96});
        this.load.spritesheet('Player2', "../../assets/HospitalGamesAssets/Characters/$Dr Frankenstien2.png", {frameWidth: 72, frameHeight: 96});
        this.load.spritesheet('Monster1', '../../assets/HospitalGamesAssets/Characters/$MonsterA.png', {frameWidth: 72, frameHeight: 96});
        this.load.spritesheet('Monster2', '../../assets/HospitalGamesAssets/Characters/$MonsterB.png', {frameWidth: 72, frameHeight: 96});
        this.load.spritesheet('Heartbeat', '../../assets/HospitalGamesAssets/Objects/!$ECG_Heartbeat.png', {frameWidth: 48, frameHeight: 48});
        this.load.spritesheet('Monitor', '../../assets/HospitalGamesAssets/Objects/!$Monitor.png', {frameWidth: 144, frameHeight: 96});
        this.load.spritesheet('FullTank', '../../assets/HospitalGamesAssets/Objects/!$Specimen_Tank-Full.png', {frameWidth: 144, frameHeight: 144});
        this.load.spritesheet('Cast2', '../../assets/HospitalGamesAssets/Characters/60FPS_ASDark_02_Cast2.png',{frameWidth: 192, frameHeight:192});
        this.load.spritesheet('Cast2', '../../assets/HospitalGamesAssets/Characters/60FPS_ASDark_02_Cast2.png',{frameWidth: 192, frameHeight:192});
    }

    create() {
        // here we start the GameScene to start the game
        this.scene.start('Game');
    }
}