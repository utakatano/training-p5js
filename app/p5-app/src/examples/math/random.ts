import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.background(0)
  p.strokeWeight(20)
  p.frameRate(2)
}

export const draw = (p: p5) => {
  for (let i = 0; i < p.width; i++) {
    const r = p.random(255)
    p.stroke(r)
    p.line(i, 0, i, p.height)
  }
}