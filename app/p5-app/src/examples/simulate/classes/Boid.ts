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
  update() {
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxSpeed)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }
  seek(target: p5.Vector) {
    const desired = p5.Vector.sub(target, this.position)
    desired.normalize()
    desired.mult(this.maxSpeed)
    const steer = p5.Vector.sub(desired, this.velocity)
    steer.limit(this.maxForce)
    return steer
  }
  borders() {
    if (this.position.x < -this.r) this.position.x = this.p.width + this.r
    if (this.position.y < -this.r) this.position.y = this.p.height + this.r
    if (this.position.x > this.p.width + this.r) this.position.x = -this.r
    if (this.position.y > this.p.height + this.r) this.position.y = -this.r
  }
  render() {
    const theta = this.velocity.heading() + this.p.radians(90)
    this.p.fill(127)
    this.p.stroke(200)
    this.p.push()
    this.p.translate(this.position.x, this.position.y)
    this.p.rotate(theta)
    this.p.beginShape()
    this.p.vertex(0, -this.r * 2)
    this.p.vertex(-this.r, this.r * 2)
    this.p.vertex(this.r, this.r * 2)
    this.p.endShape(this.p.CLOSE)
    this.p.pop()
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
  cohesion(boids: Boid[]) {
    const sum = this.p.createVector(0, 0)
    let count = 0

    for (let i = 0; i < boids.length; i++) {
      const d = p5.Vector.dist(this.position, boids[i].position)
      if ((d > 0) && (d < this.neighborDist)) {
        sum.add(boids[i].position)
        count++
      }
    }
    if (count > 0) {
      sum.div(count)
      return this.seek(sum)
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