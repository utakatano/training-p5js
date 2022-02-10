import p5 from "p5";

let particleTexture: p5.Image
let ps: ParticleSystem

export const preload = (p: p5) => {
  particleTexture = p.loadImage('/assets/particle_texture.png')
}

export const setup = (p: p5) => {
  p.createCanvas(640, 360)
  ps = new ParticleSystem(0, p, p.createVector(p.width/ 2, p.height - 60), particleTexture)
}

export const draw = (p: p5) => {
  p.background(0)
  const dx = p.map(p.mouseX, 0, p.width, -0.2, 0.2)
  const wind = p.createVector(dx, 0)
  ps.applyForce(wind)
  ps.run()

  for(let i = 0; i < 2; i++) {
    ps.addParticle()
  }

  // TODO
}

class Particle {
  p: p5
  loc: p5.Vector
  vel: p5.Vector
  acc: p5.Vector
  texture: p5.Image
  lifeSpan = 100.0

  constructor(p: p5, pos: p5.Vector, img: p5.Image) {
    this.p = p
    this.loc = pos.copy()

    const vx = p.randomGaussian(0, 0) * 0.3
    const vy = p.randomGaussian(0, 0) * 0.3 - 1.0

    this.vel = p.createVector(vx, vy)
    this.acc = p.createVector()
    this.texture = img
  }

  run() {
    this.update()
    this.render()
  }

  render() {
    this.p.imageMode(this.p.CENTER)
    this.p.tint(255, this.lifeSpan)
    this.p.image(this.texture, this.loc.x, this.loc.y)
  }

  applyForce(f: p5.Vector) {
    this.acc.add(f)
  }

  isDead() {
    return this.lifeSpan <= 0.0 ? true: false
  }

  update() {
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.lifeSpan -= 2.5
    this.acc.mult(0)
  }
}

class ParticleSystem {
  p: p5
  particles: Particle[] = []
  origin: p5.Vector
  img: p5.Image

  constructor(num: number, p: p5, v: p5.Vector, img: p5.Image) {
    this.p = p
    this.origin = v.copy()
    this.img = img
    for (let i = 0; i < num; i++) {
      this.particles.push(new Particle(p, this.origin, this.img))
    }
  }

  run() {
    const len = this.particles.length

    for (let i = len - 1; i >= 0; i--) {
      const particle = this.particles[i]
      particle.run()

      if (particle.isDead()) {
        this.particles.splice(i, 1)
      }
    }
  }

  applyForce(dir: p5.Vector) {
    const len = this.particles.length
    for (let i = 0; i < len; i++) {
      this.particles[i].applyForce(dir)
    }
  }

  addParticle() {
    this.particles.push(new Particle(this.p, this.origin, this.img))
  }
}