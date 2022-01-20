import p5 from "p5";

class Jitter {
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

let bug: Jitter

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  bug = new Jitter(p)
}

export const draw = (p: p5) => {
  p.background(50, 89, 100)
  bug.move()
  bug.display()
}