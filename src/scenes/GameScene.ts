import { Forklift } from "../sprites/Forklift";
import { ImageManifest } from "../manifests/ImageManifest";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

let text;

export class GameScene extends Phaser.Scene {
  private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
  private forklift: Forklift; //Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };

  private goingRight: Boolean;
  private goingLeft: Boolean;

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.load.multiatlas('forklift', './assets/forklift.json', 'assets');
    this.load.multiatlas('foot-controls', './assets/foot-controls.json', 'assets');
    
    this.load.image("background", "./assets/background.jpg");
  }

  public create() {
    this.add.image(0, -150, "background").setOrigin(0, 0);

    this.forklift = new Forklift(this, 0, 150);//.setOrigin(0, 0);
    this.forklift.body.useDamping = true;
    const drag = 0.94;
    this.forklift.body.setDrag(drag, drag);

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: 'black' });

    const brake = this.add.image(100, 600, "foot-controls", "brake.png").setOrigin(0, 0).setInteractive();
    const accelerator = this.add.image(300, 600, "foot-controls", "accelerator.png").setOrigin(0, 0).setInteractive();
    brake.on('pointerdown', () => { this.goingLeft = true } );
    brake.on('pointerup', () => { this.goingLeft = false } );
    accelerator.on('pointerdown', () => { this.goingRight = true } );
    accelerator.on('pointerup', () => { this.goingRight = false } );
  }
  
  public update() {
    const cursorKeys = this.input.keyboard.createCursorKeys();
    const speed = 100;

    if (cursorKeys.right.isDown || this.goingRight) {
      //this.physics.accelerateTo(this.forklift, window.innerWidth, 0, 200);
      //this.forklift.body.setVelocityX(200);
      this.forklift.body.acceleration.x = speed;
    } else if (cursorKeys.left.isDown || this.goingLeft) {
      //this.physics.accelerateTo(this.forklift, 0, 0, 200);
      //this.forklift.body.setVelocityX(-200);
      this.forklift.body.acceleration.x = -speed;
    } else {
      //this.forklift.body.setVelocityX(0);
      this.forklift.body.acceleration.x = 0;
    }

    text.setText('Speed: ' + this.forklift.x);
  }
}