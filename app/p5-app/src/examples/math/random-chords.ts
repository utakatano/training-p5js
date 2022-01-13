import p5 from "p5"

export const setup = (p: p5) => {
  p.createCanvas(400, 400)
  p.background(255, 255, 255)

  p.stroke(0, 0, 0, 15)
}

const randomChord = (p: p5) => {
  const angle1 = p.random(0, 2 * p.PI)
  const xpos1 = 200 + 200 * p.cos(angle1)
  const ypos1 = 200 + 200 * p.sin(angle1)

  const angle2 = p.random(0, 2 * p.PI)
  const xpos2 = 200 + 200 * p.cos(angle2)
  const ypos2 = 200 + 200 * p.sin(angle2)

  p.line(xpos1, ypos1, xpos2, ypos2)
}

export const draw = (p: p5) => {
  randomChord(p)
  randomChord(p)
}