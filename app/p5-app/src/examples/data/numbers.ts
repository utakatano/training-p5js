import p5 from "p5"

let a = 0
let b = 0

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.stroke(255)
}

export const draw = (p: p5) => {
  p.background(0)

  a += 1
  b += 0.2
  p.line(a, 0, a, p.height / 2)
  p.line(b, p.height / 2, b, p.height)

  if (a > p.width) {
    a = 0
  }
  if (b > p.width) {
    b = 0
  }
}