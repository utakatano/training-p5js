import p5 from "p5"

const xincrement = 0.01
let xoff = 0.0

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.background(0)
  p.noStroke()
}

export const draw = (p: p5) => {
  p.fill(0, 10)
  p.rect(0, 0, p.width, p.height)

  const n = p.noise(xoff) * p.width
  xoff += xincrement
  p.fill(200)
  p.ellipse(n, p.height / 2, 64, 64)
}

