import p5 from "p5";

const totalPts = 300
const steps = totalPts + 1

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.stroke(255)
  p.frameRate(1)
}

export const draw = (p: p5) => {
  p.background(0)
  let rand = 0
  for (let i = 1; i < steps; i++) {
    p.point((p.width / steps) * i, p.height / 2 + p.random(-rand, rand))
    rand += p.random(-5, 5)
  }
}