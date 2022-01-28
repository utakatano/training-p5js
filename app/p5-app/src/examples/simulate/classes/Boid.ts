import p5 from "p5"

export class Boid {
  p: p5
  acceleration: p5.Vector
  velocity: p5.Vector
  position: p5.Vector
  r = 3.0
  maxSpeed = 3
  maxForce = 0.05
  neighborDist = 50

  constructor(p: p5, x: number, y: number) {
    this.p = p
    this.acceleration = p.createVector(0, 0)
    this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1))
    this.position = p.createVector(x, y)
  }
  run(boids: Boid[]) {
    this.flock(boids)
    this.update()
    this.borders()
    this.render()
  }
  applyForce(force: p5.Vector) {
    this.acceleration.add(force)
  }
  separate(boids: Boid[]) {
    const desiredSeparation = 25.0
    const steer = this.p.createVector(0, 0)
    let count = 0
    
    for (let i = 0; i < boids.length; i++) {
      const d = p5.Vector.dist(this.position, boids[i].position)
      if ((d > 0) && (d < desiredSeparation)) {
        const diff = p5.Vector.sub(this.position, boids[i].position)
        diff.normalize()
        diff.div(d)
        steer.add(diff)
        count++
      }
    }
    if (count > 0) {
      steer.div(count)
    }
    if (steer.mag() > 0) {
      steer.normalize()
      steer.mult(this.maxSpeed)
      steer.sub(this.velocity)
      steer.limit(this.maxForce)
    }
    return steer
  }
  align(boids: Boid[]) {
    const sum = this.p.createVector(0, 0)
    let count = 0

    for (let i = 0; i < boids.length; i++) {
      const d = p5.Vector.dist(this.position, boids[i].position)
      if ((d > 0) && (d < this.neighborDist)) {
        sum.add(boids[i].velocity)
        count++
      }
    }
    if (count > 0) {
      sum.div(count)
      sum.normalize()
      sum.mult(this.maxSpeed)
      const steer = p5.Vector.sub(sum, this.velocity)
      steer.limit(this.maxForce)
      return steer
    } else {
      return this.p.createVector(0, 0)
    }
  }
  flock(boids: Boid[]) {
    const sep = this.separate(boids)
    const ali = this.align(boids)
    const coh = this.cohesion(boids)
    sep.mult(1.5)
    ali.mult(1.0)
    coh.mult(1.0)

    this.applyForce(sep)
    this.applyForce(ali)
    this.applyForce(coh)
  }
}