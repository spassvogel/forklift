export class Forklift extends Phaser.GameObjects.Container {
//export class Forklift extends Phaser.Physics.Arcade.Sprite {
  body: Phaser.Physics.Arcade.Body;
  rearWheel: Phaser.GameObjects.Sprite;
  
  constructor(scene, x, y, children?) {
    super(scene, x, y, children);
    
    //, "body.png");
    var body = new Phaser.GameObjects.Sprite(scene, 0, 0, "forklift", "body.png");
    body.setOrigin(0, 0);
    this.add(body);
    
    this.rearWheel = new Phaser.GameObjects.Sprite(scene, 88, 400, "forklift", "rear-wheel.png");
    //rearWheel.setOrigin(0, 0);
    this.add(this.rearWheel);
    

    scene.physics.world.enable(this);
    scene.add.existing(this);

    this.scene.events.on('update', (time, delta) => { this.update(time, delta)} );
  }

  update (time, delta) {
    this.rearWheel.angle = this.x;
  }
}