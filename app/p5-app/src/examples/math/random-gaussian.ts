import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.background(0)
}

export const draw = (p: p5) => {
  const val = p.randomGaussian(0, 1)
  const sd = 60
  const mean = p.width / 2
  const x = (val * sd) + mean

  p.noStroke()
  p.fill(255, 10)
  p.ellipse(x, p.height / 2, 32, 32)
}