import p5 from "p5"

let yoff = 0.0

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
}

export const draw = (p: p5) => {
  p.background(51)
  p.fill(255)

  p.beginShape()

  let xoff = 0

  for (let x = 0; x <= p.width; x+= 10) {
    const y = p.map(p.noise(xoff, yoff), 0, 1, 200, 300)
    p.vertex(x, y)
    xoff += 0.05
  }

  yoff += 0.01
  p.vertex(p.width, p.height)
  p.vertex(0, p.height)
  p.endShape(p.CLOSE)
}