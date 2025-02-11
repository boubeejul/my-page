let particlesSketch = (p) => {
  let particles = [];

  p.setup = () => {
    let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }
  };

  p.draw = () => {
    p.background(0);
    for (let part of particles) {
      part.update();
      part.show();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  class Particle {
      constructor() {
        this.pos = p.createVector(p.random(p.width), p.random(p.height));
        this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
        this.size = p.random(2, 6);
      }

      update() {
        this.pos.add(this.vel);
        if (this.pos.x > p.width || this.pos.x < 0) this.vel.x *= -1;
        if (this.pos.y > p.height || this.pos.y < 0) this.vel.y *= -1;
      }

      show() {
        p.noStroke();
        p.fill(50);
        p.ellipse(this.pos.x, this.pos.y, this.size);
      }
  }
};

new p5(particlesSketch);