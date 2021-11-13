import p5 from "p5"

let pg: p5.Graphics

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  pg = p.createGraphics(400, 250)
}

export const draw = (p: p5) => {
  p.fill(0, 12)
  p.rect(0, 0, p.width, p.height)
  p.fill(255)
  p.noStroke()
  p.ellipse(p.mouseX, p.mouseY, 60, 60)

  pg.background(51)
  pg.noFill()
  pg.stroke(255)
  pg.ellipse(p.mouseX - 150, p.mouseY - 75, 60, 60)

  p.image(pg, 150, 75)
}