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
}

let bug: Jitter

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  bug = new Jitter(p)
}