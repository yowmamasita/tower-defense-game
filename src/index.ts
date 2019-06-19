import Phaser from 'phaser';

import {TestScene} from './scenes/test_scene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    parent: 'content',
    resolution: 1,
    scene: TestScene
};

new Phaser.Game(config);
