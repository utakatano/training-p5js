import p5 from "p5"

let x: number
let y: number
const outsideRadius = 150
const insideRadius = 100

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.background(204)
  x = p.width / 2
  y = p.height / 2
}

export const draw = (p: p5) => {
  p.background(204)

  const numPoints = p.int(p.map(p.mouseX, 0, p.width , 6, 60))
  let angle = 0
  const angleStep = 180.0 / numPoints

  p.beginShape(p.TRIANGLE_STRIP)
  for (let i = 0; i <= numPoints; i++) {
    let px = x + p.cos(p.radians(angle)) * outsideRadius
    let py = y + p.sin(p.radians(angle)) * outsideRadius
    angle += angleStep
    p.vertex(px, py)
    px = x + p.cos(p.radians(angle)) * insideRadius
    py = y + p.sin(p.radians(angle)) * insideRadius
    p.vertex(px, py)
    angle += angleStep
  }
  p.endShape()
}