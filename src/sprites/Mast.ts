export class Mast extends Phaser.GameObjects.Container {
  frontWheel: Phaser.GameObjects.Sprite;
  mast: Phaser.GameObjects.Sprite;

  private texture = "forklift";

  constructor(scene, x, y, children?) {
    super(scene, x, y, children);
    
    this.mast = new Phaser.GameObjects.Sprite(scene, 688, 446, this.texture, "mast.png")//.setOrigin(0.425, 0.772);//.setOrigin(-58, -456);
    this.add(this.mast);

    // this.mast.add

    // var hull = new Phaser.GameObjects.Sprite(scene, 0, 0, this.texture, "hull.png");
    // hull.setOrigin(0, 0);
    // this.add(hull);
    
    // this.rearWheel = new Phaser.GameObjects.Sprite(scene, 140, 600, this.texture, "rear-wheel.png");
    // this.add(this.rearWheel);
    
    // this.frontWheel = new Phaser.GameObjects.Sprite(scene, 660, 575, this.texture, "front-wheel.png");
    // this.add(this.frontWheel);
    // this.mast.add

    // var hull = new Phaser.GameObjects.Sprite(scene, 0, 0, this.texture, "hull.png");
    // hull.setOrigin(0, 0);
    // this.add(hull);
    
    // this.rearWheel = new Phaser.GameObjects.Sprite(scene, 140, 600, this.texture, "rear-wheel.png");
    // this.add(this.rearWheel);
    
    // this.frontWheel = new Phaser.GameObjects.Sprite(scene, 660, 575, this.texture, "front-wheel.png");
    // this.add(this.frontWheel);

    scene.add.existing(this);

    //this.scene.events.on('update', (time, delta) => { this.update(time, delta)} );
    //this.scale = 0.5;
  }

  update (time, delta) {
    //this.rearWheel.angle = this.x;
    //this.frontWheel.angle = this.x;

    //this.mast.angle ++;
  }

  tiltBack () {
    // this.mast.angle -= this.tiltSpeed;
    // if (this.mast.angle < this.minTiltAngle) {
    //   this.mast.angle = this.minTiltAngle;
    // }
  }

  tiltForward () {
    // this.mast.angle += this.tiltSpeed;
    // if (this.mast.angle > this.maxTitleAngle) {
    //   this.mast.angle = this.maxTitleAngle;
    // }
  }
}