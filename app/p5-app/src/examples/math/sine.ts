import p5 from "p5";

let diameter: number
let angle = 0

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  diameter = p.height - 10
  p.noStroke()
  p.fill(255, 204, 0)
}

export const draw = (p: p5) => {
  p.background(0)

  const d1 = 10 + (p.sin(angle) * diameter) / 2 + diameter / 2
  const d2 = 10 + (p.sin(angle + p.PI / 2) * diameter) / 2 + diameter / 2
  const d3 = 10 + (p.sin(angle + p.PI) * diameter) / 2 + diameter / 2

  const ypos = p.height / 2

  p.ellipse(0, ypos, d1, d1)
  p.ellipse(p.width / 2, ypos, d2, d2)
  p.ellipse(p.width, ypos, d3, d3)

  angle += 0.02
}