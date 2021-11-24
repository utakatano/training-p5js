import p5 from "p5"

let a = 80

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.background(0)
  p.stroke(255)
  p.noLoop()
}

export const draw = (p: p5) => {
  p.line(a, 0, a, p.height)
}