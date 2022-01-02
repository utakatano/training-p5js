import p5 from "p5";

let angle1 = 0
let angle2 = 0
const scalar = 70

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.noStroke()
  p.rectMode(p.CENTER)
}

export const draw = (p: p5) => {
  p.background(0)

  const ang1 = p.radians(angle1)
  const ang2 = p.radians(angle2)

  const x1 = p.width / 2 + 120 * p.cos(ang1)
  const x2 = p.width / 2 + 120 * p.cos(ang2)

  const y1 = p.height / 2 + 120 * p.sin(ang1)
  const y2 = p.height / 2 + 120 * p.sin(ang2)

  p.fill(255)
  p.rect(p.width * 0.5, p.height * 0.5, 140, 140)

  p.fill(0, 102, 153)
  p.ellipse(x1, p.height * 0.5 - 120, scalar, scalar)
  p.ellipse(x2, p.height * 0.5 + 120, scalar, scalar)

  p.fill(255, 204, 0)
  p.ellipse(p.width * 0.5 - 120, y1, scalar, scalar)
  p.ellipse(p.width * 0.5 + 120, y2, scalar, scalar)

  angle1 += 2
  angle2 += 3
}