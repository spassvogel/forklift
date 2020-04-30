export class Forklift extends Phaser.GameObjects.Container {
//export class Forklift extends Phaser.Physics.Arcade.Sprite {
  body: Phaser.Physics.Matter.Sprite;
  rearWheel: Phaser.GameObjects.Sprite;
  frontWheel: Phaser.GameObjects.Sprite;
  mast: Phaser.GameObjects.Sprite;
  mastContainer: Phaser.GameObjects.Container;
  carriage: Phaser.GameObjects.Sprite;

  private tiltSpeed = 0.05;  
  private minTiltAngle = -5; // max angle tilting back
  private maxTitleAngle = 0; // max angle tilting forward

  private forkSpeed = 3;
  private forkFloor = -25;
  private forkCeiling = -454;
  private texture = "forklift";

  constructor(scene, x, y, children?) {
    super(scene, x, y, children);
    
    this.mastContainer = new Phaser.GameObjects.Container(scene, 323, 170);
    this.mastContainer.add(new Phaser.GameObjects.Sprite(scene, 0, 0, this.texture, "mast.png").setOrigin(0.425, 0.772));
    this.carriage = new Phaser.GameObjects.Sprite(scene, 70, this.forkFloor, this.texture, "carriage.png").setOrigin(0, 0);
    scene.matter.world.add(this.carriage);
    //scene.physics.world.enable(this.carriage);
    this.mastContainer.add(this.carriage);
    this.add(this.mastContainer);

    var hull = new Phaser.GameObjects.Sprite(scene, 0, 0, this.texture, "hull.png");
    // hull.setOrigin(0, 0);
    this.add(hull);
    
    this.rearWheel = new Phaser.GameObjects.Sprite(scene, -225, 296, this.texture, "rear-wheel.png");
    this.add(this.rearWheel);
    
    this.frontWheel = new Phaser.GameObjects.Sprite(scene, 295, 270, this.texture, "front-wheel.png");
    this.add(this.frontWheel);

    // this.body.setOffset(10, 10);
    // this.body.setSize(200, 300)
    this.setSize(320, 384);
    var physicsContainer = scene.matter.add.gameObject(this);
    //physicsContainer.setOffset(10, 10);
    physicsContainer.setFrictionAir(0.001);
    physicsContainer.setBounce(0.9);
    //physicsContainer.body.x = 31;
    scene.add.existing(this);
    //physicsContainer.setExistingBody(hull);
    // scene.matter.world.add(this);

    // scene.matter.add.gameObject(this);

    this.scene.events.on('update', (time, delta) => { this.update(time, delta)} );
    this.scale = 0.5;
  }

  update (time, delta) {
    this.rearWheel.angle = this.x;
    this.frontWheel.angle = this.x;
  }

  tiltBack () {
    this.mastContainer.angle -= this.tiltSpeed;
    if (this.mastContainer.angle < this.minTiltAngle) {
      this.mastContainer.angle = this.minTiltAngle;
    }
  }

  tiltForward () {
    this.mastContainer.angle += this.tiltSpeed;
    if (this.mastContainer.angle > this.maxTitleAngle) {
      this.mastContainer.angle = this.maxTitleAngle;
    }
  }

  forksUp() {
    this.carriage.y -= this.forkSpeed;
    if (this.carriage.y < this.forkCeiling) {
      this.carriage.y = this.forkCeiling;
    }
  }

  forksDown() {
    this.carriage.y += this.forkSpeed;
    if (this.carriage.y > this.forkFloor) {
      this.carriage.y = this.forkFloor;
    }
  }

}