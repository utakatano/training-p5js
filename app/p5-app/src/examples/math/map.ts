import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.noStroke()
}

export const draw = (p: p5) => {
  p.background(0)
  const c = p.map(p.mouseX, 0, p.width, 0, 175)
  const d = p.map(p.mouseX, 0, p.width, 0, 600)
  p.fill(255, c, 0)
  p.ellipse(p.width / 2, p.height / 2, d, d)
}