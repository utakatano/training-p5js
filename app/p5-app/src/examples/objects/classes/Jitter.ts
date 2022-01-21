import p5 from "p5"

export class Jitter {
  p: p5
  x: number
  y: number
  diameter: number
  speed: number

  constructor(p: p5) {
    this.p = p
    this.x = p.random(p.width)
    this.y = p.random(p.height)
    this.diameter = p.random(10, 30)
    this.speed = 1
  }

  move() {
    this.x += this.p.random(-this.speed, this.speed)
    this.y += this.p.random(-this.speed, this.speed)
  }

  display() {
    this.p.ellipse(this.x, this.y, this.diameter, this.diameter)
  }
}
