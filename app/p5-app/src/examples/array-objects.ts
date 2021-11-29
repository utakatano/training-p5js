import p5 from "p5";

class Module {
  xOff: number
  yOff: number
  x: number
  y: number
  speed: number
  unit: number
  xDir: number
  yDir: number
  p: p5
  timer: number

  constructor(xOff: number, yOff: number, x: number, y: number, speed: number, unit: number, p: p5) {
    this.xOff = xOff
    this.yOff = yOff
    this.x = x
    this.y = y
    this.speed = speed
    this.unit = unit
    this.xDir = 1
    this.yDir = 1
    this.p = p

    this.timer = Math.random() * 10000
  }

  update() {
    this.x = this.x + this.speed * this.xDir
    if (this.x >= this.unit || this.x <= 0) {
      this.xDir *= -1
      this.x = this.x + 1 * this.xDir
      this.y = this.y + 1 * this.yDir
    }
    if (this.y >= this.unit || this.y <= 0) {
      this.yDir *= -1
      this.y = this.y + 1 * this.yDir
    }
  }

  getDiameter() {
    return Math.sin(this.timer + Date.now() / 100) * 6
  }

  draw() {
    this.p.fill(255)
    this.p.ellipse(this.xOff + this.x, this.yOff + this.y, this.getDiameter(), this.getDiameter())
  }
}

const unit = 40
const mods: Module[] = []
let count: number

export const setup = (p: p5) => {
  p.createCanvas(720, 360)
  p.noStroke()
  const wideCount = p.width / unit
  const heighCount = p.height / unit
  count = wideCount * heighCount

  let index = 0
  for (let y = 0; y < heighCount; y++) {
    for (let x = 0; x < wideCount; x++) {
      mods[index++] = new Module(
        x * unit,
        y * unit,
        unit / 2,
        unit / 2,
        p.random(0.05, 0.8),
        unit,
        p
      )
    }
  }
}

export const draw = (p: p5) => {
  p.background(0)
  for (let i = 0; i < count; i++) {
    mods[i].update()
    mods[i].draw()
  }
}