import p5 from "p5"

class Eye {
  p: p5
  x: number
  y: number
  size: number
  angle: number

  constructor(p: p5, tx: number, ty: number, ts: number) {
    this.p = p
    this.x = tx
    this.y = ty
    this.size = ts
    this.angle = 0
  }

  update(mx: number, my: number) {
    this.angle = this.p.atan2(my - this.y, mx - this.x)
  }

  display() {
    this.p.push()
    this.p.translate(this.x, this.y)
    this.p.fill(255)
    this.p.ellipse(0, 0, this.size, this.size)
    this.p.rotate(this.angle)
    this.p.fill(153, 204, 0)
    this.p.ellipse(this.size / 4, 0, this.size / 2, this.size / 2)
    this.p.pop()
  }
}

let e1: Eye
let e2: Eye
let e3: Eye

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.noStroke()
  e1 = new Eye(p, 250, 16, 120)
  e2 = new Eye(p, 164, 185, 80)
  e3 = new Eye(p, 420, 230, 220)
}

export const draw = (p: p5) => {
  p.background(102)
  e1.update(p.mouseX, p.mouseY)
  e2.update(p.mouseX, p.mouseY)
  e3.update(p.mouseX, p.mouseY)
  e1.display()
  e2.display()
  e3.display()
}