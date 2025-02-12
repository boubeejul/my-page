let starSketch = (p) => {
  let rings = [];
  let n = 9;

  p.setup = () => {
    let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
    
    for (let i = 0; i < n; i++) {
      rings[i] = new Ring(200 - i * 20, 50 - i * 5, 6 - i * 0.5);
    }
    cnv.parent("tree-container");
  };

  p.draw = () => {
    p.clear();
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < n; i++) {
      rings[i].display();
      rings[i].move();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  class Ring {
    constructor(r, num, d) {
      this.r = r;
      this.num = num;
      this.d = d;
      
      this.angle = 0;
      this.amt = 0;
      this.min = 0;
    }
    
    display() {
      p.noStroke();
      p.fill(50);
      for (let i = 0; i < this.num; i++) {
        let startingAngle = 360 / this.num * i; 
        let x = this.r * p.cos(startingAngle + this.angle);
        let y = this.r * p.sin(startingAngle + this.angle);
        p.ellipse(x, y, this.d, this.d);
      }
    }
    
    move() {
      this.angle = this.min + easeInOutQuad(this.amt) * (360 / this.num);
      if (this.amt > 1) {
        this.amt = 0;
        this.min += 360 / this.num;
      } else {
        this.amt += 0.01;
      }
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
};

new p5(starSketch);
