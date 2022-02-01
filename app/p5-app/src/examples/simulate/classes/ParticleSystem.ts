import p5 from "p5";

export class Particle {
  p: p5
  acceleration: p5.Vector
  velocity: p5.Vector
  position: p5.Vector
  lifespan = 255

  constructor(p: p5, position: p5.Vector) {
    this.p = p
    this.acceleration = this.p.createVector(0, 0.05)
    this.velocity = this.p.createVector(this.p.random(-1, 1), this.p.random(-1, 0))
    this.position = position.copy()
  }
  run() {
    this.update()
    this.display()
  }
  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.lifespan -= 2
  }
  display() {
    this.p.stroke(200, this.lifespan)
    this.p.strokeWeight(2)
    this.p.fill(127, this.lifespan)
    this.p.ellipse(this.position.x, this.position.y, 12, 12)
  }
  isDead() {
    return this.lifespan < 0
  }
}

export class ParticleSystem {
  p: p5
  origin: p5.Vector
  particles: Particle[] = []

  constructor(p: p5, position: p5.Vector) {
    this.p = p
    this.origin = position.copy()
  }
  addParticle() {
    this.particles.push(new Particle(this.p, this.origin))
  }
  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i]
      p.run()
      if (p.isDead()) {
        this.particles.splice(i, 1)
      }
    }
  }
}