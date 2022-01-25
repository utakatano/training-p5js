import p5 from "p5";

let x = 0
let y = 0
const dim = 80.0

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.noStroke()
}

export const draw = (p: p5) => {
  p.background(102)
  x = x + 0.8

  if (x > p.width + dim) {
    x = -dim
  }

  p.translate(x, p.height / 2 - dim / 2)
  p.fill(255)
  p.rect(-dim / 2, -dim / 2, dim, dim)

  p.translate(x, dim)
  p.fill(0)
  p.rect(-dim / 2, -dim / 2, dim, dim)
}