import p5 from "p5"

export class Snowflake {
  p: p5
  posX = 0
  posY: number
  initialAngle: number
  size: number
  radius: number

  constructor(p: p5) {
    this.p = p
    this.posY = p.random(-50, 0)
    this.initialAngle = p.random(0, 2 * p.PI)
    this.size = p.random(2, 5)
    this.radius = p.sqrt(p.random(p.pow(p.width / 2, 2)))
  }

  update(time: number) {
    const w = 0.6
    const angle = w * time + this.initialAngle
    this.posX = this.p.width / 2 + this.radius * this.p.sin(angle)

    this.posY += this.p.pow(this.size, 0.5)
  }

  isOverHeight() {
    return this.posY > this.p.height
  }

  display() {
    this.p.ellipse(this.posX, this.posY, this.size)
  }
}