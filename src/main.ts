import * as Phaser from 'phaser';
import { GameScene } from './scenes/GameScene';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',
  
  type: Phaser.AUTO,
  
  scale: {
    //width: window.innerWidth,
    //height: window.innerHeight,
    mode: Phaser.Scale.FIT
  },
  scene: [GameScene],
  physics: {
    default: 'matter',
    matter: {
      debug: true
    }
  },
  
  parent: 'game',
  backgroundColor: '#BADA55',
};

export const game = new Phaser.Game(gameConfig);