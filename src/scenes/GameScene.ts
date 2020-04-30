import { Forklift } from "../sprites/Forklift";
import { ImageManifest } from "../manifests/ImageManifest";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

let text;

interface Keys {
  left?: Phaser.Input.Keyboard.Key;
  right?: Phaser.Input.Keyboard.Key;
  tiltBack?: Phaser.Input.Keyboard.Key;
  tiltForward?: Phaser.Input.Keyboard.Key;
  forksDown?: Phaser.Input.Keyboard.Key;
  forksUp?: Phaser.Input.Keyboard.Key;
}

export class GameScene extends Phaser.Scene {
  private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
  private forklift: Forklift; //Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };

  private goingRight: Boolean;
  private goingLeft: Boolean;

  private keys: Keys;
  cargo: Phaser.Physics.Matter.Image;

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.load.multiatlas('forklift', './assets/forklift.json', 'assets');
    this.load.multiatlas('foot-controls', './assets/foot-controls.json', 'assets');
    
    this.load.image("cargo", "./assets/cargo.png");
    this.load.image("background", "./assets/background.jpg");
  }

  public create() {
    this.add.image(0, -150, "background").setOrigin(0, 0);

    this.forklift = new Forklift(this, 0, 270);//.setOrigin(0, 0);
    //this.forklift.body.useDamping = true;
    const drag = 0.94;
    //this.forklift.body.setDrag(drag, drag);

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: 'black' });

    this.matter.world.setBounds(0, 0, 1000, 530);
    this.matter.world.createDebugGraphic();

    const brake = this.add.image(100, 600, "foot-controls", "brake.png").setOrigin(0, 0).setInteractive();
    const accelerator = this.add.image(300, 600, "foot-controls", "accelerator.png").setOrigin(0, 0).setInteractive();
    brake.on('pointerdown', () => { this.goingLeft = true } );
    brake.on('pointerup', () => { this.goingLeft = false } );
    accelerator.on('pointerdown', () => { this.goingRight = true } );
    accelerator.on('pointerup', () => { this.goingRight = false } );

    this.keys = {
      tiltBack: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.OPEN_BRACKET),
      tiltForward: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CLOSED_BRACKET),
      forksDown: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z),
      forksUp: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
    } 

    this.cargo = this.matter.add.image(700, 396, 'cargo').setScale(0.5);

    //this.cargo.setDrag(0.91, 0.91);
    //this.cargo.setDamping(true);
    //this.matter.world.add.collider(this.cargo, this.forklift);

    // this.forklift.mast.setInteractive();
    // this.input.setDraggable(this.forklift.mast);
    // this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    //   gameObject.x = dragX;
    //   gameObject.y = dragY;
    //   console.log(dragX, dragY);
    // });
  }
  
  public update() {
    const cursorKeys = this.input.keyboard.createCursorKeys();
    const speed = 100;
    
    this.input.mousePointer.x;
    this.input.mousePointer.y;

      // if (cursorKeys.right.isDown || this.goingRight) {
      //   this.forklift.body.acceleration.x = speed;
      // } else if (cursorKeys.left.isDown || this.goingLeft) {
      //   this.forklift.body.acceleration.x = -speed;
      // } else {
      //   this.forklift.body.acceleration.x = 0;
      // }

    // Tilt controls
    if (this.keys.tiltBack && this.keys.tiltBack.isDown) {
      this.forklift.tiltBack();
    }
    if (this.keys.tiltForward && this.keys.tiltForward.isDown) {
      this.forklift.tiltForward();
    }

    if (this.keys.forksDown && this.keys.forksDown.isDown) {
      this.forklift.forksDown();
    }
    if (this.keys.forksUp && this.keys.forksUp.isDown) {
      this.forklift.forksUp();
    }

    // text.setText('x: ' + this.input.mousePointer.x + ', y: ' + this.input.mousePointer.y);
  }
}