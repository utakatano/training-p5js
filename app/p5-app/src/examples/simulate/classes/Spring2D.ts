import p5 from "p5"

export class Spring2D {
  p: p5
  x: number
  y: number
  mass: number
  gravity: number
  vx = 0
  vy = 0
  radius = 30
  stiffness = 0.2
  damping = 0.7

  constructor(p: p5, xpos: number, ypos: number, m: number, g: number) {
    this.p = p
    this.x = xpos
    this.y = ypos
    this.mass = m
    this.gravity = g
  }

  update(targetX: number, targetY: number) {
    const forceX = (targetX - this.x) * this.stiffness
    const ax = forceX / this.mass
    this.vx = this.damping * (this.vx + ax)
    this.x += this.vx

    const forceY = (targetY - this.y) * this.stiffness + this.gravity
    const ay = forceY / this.mass
    this.vy = this.damping * (this.vy + ay)
    this.y += this.vy
  }

  display(nx: number, ny: number) {
    this.p.noStroke()
    this.p.ellipse(this.x, this.y, this.radius * 2, this.radius * 2)
    this.p.stroke(255)
    this.p.line(this.x, this.y, nx, ny)
  }
}