import p5 from "p5"

export class Mover {
  p: p5
  mass: number
  position: p5.Vector
  velocity: p5.Vector
  acceleration: p5.Vector

  constructor(p: p5, m: number, x: number, y: number) {
    this.p = p
    this.mass = m
    this.position = p.createVector(x, y)
    this.velocity = p.createVector(0, 0)
    this.acceleration = p.createVector(0, 0)
  }
  applyForce(force: p5.Vector) {
    const f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }
  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }
  display() {
    this.p.stroke(0)
    this.p.strokeWeight(2)
    this.p.fill(255, 127)
    this.p.ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16)
  }
  checkEdges() {
    if (this.position.y > (this.p.height - this.mass * 8)) {
      this.velocity.y *= -0.9
      this.position.y = (this.p.height - this.mass * 8)
    }
  }
}