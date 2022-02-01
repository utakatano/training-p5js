import p5 from "p5";
import { Particle } from "./classes/ParticleSystem";

class CrazyParticle extends Particle {
  theta = 0.0
  constructor(p: p5, position: p5.Vector) {
    super(p, position)
  }
  update() {
    this.theta += (this.velocity.x * this.velocity.mag()) / 10.0
  }
  display() {
    this.p.push()
    this.p.translate(this.position.x, this.position.y)
    this.p.rotate(this.theta)
    this.p.stroke(255, this.lifespan)
    this.p.line(0, 0, 25, 0)
    this.p.pop()
  }
}

class ParticleSystem {
  p: p5
  origin: p5.Vector
  particles: Particle[] = []
  constructor(p: p5, position: p5.Vector) {
    this.p = p
    this.origin = position.copy()
  }
  addParticle() {
    const p = this.p.int(this.p.random(0, 2)) === 0
      ? new Particle(this.p, this.origin) 
      : new CrazyParticle(this.p, this.origin)
    this.particles.push(p)
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

const systems: ParticleSystem[] = []

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
}

export const draw = (p: p5) => {
  p.background(51)
  p.background(0)
  for (let i = 0; i < systems.length; i++) {
    systems[i].run()
    systems[i].addParticle()
  }
  if (systems.length === 0) {
    p.fill(255)
    p.textAlign(p.CENTER)
    p.textSize(32)
    p.text('click mouse to add particle systems', p.width / 2, p.height / 2)
  }
}

export const mousePressed = (p: p5) => {
  const particle = new ParticleSystem(p, p.createVector(p.mouseX, p.mouseY))
  systems.push(particle)
}