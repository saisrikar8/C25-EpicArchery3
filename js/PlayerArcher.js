class PlayerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.collapse = false;
      this.image = loadImage("./assets/playerArcher.png");
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
      this.angle = this.body.angle;
    }
  
    display() {
      var pos = this.body.position;
      
      if (keyIsDown(DOWN_ARROW) && this.angle < -1.2) {
        this.angle += 0.01;
        Matter.Body.setAngle(this.body, this.angle);
      }
  
      if (keyIsDown(UP_ARROW) && this.angle > -1.9) {
        this.angle -= 0.01;
        Matter.Body.setAngle(this.body, this.angle);
      }
      
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  