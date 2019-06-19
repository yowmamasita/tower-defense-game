import Phaser from 'phaser';

export class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TestScene'
        });
    }

    preload() {
        console.log('preload');
    }
    create() {
        console.log('create');
    }
    update(time: number, delta: number) {
        // console.log('update');
    }
}
