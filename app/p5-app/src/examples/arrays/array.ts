import p5 from "p5"

const coswave: number[] = []

export const setup = (p: p5) => {
  p.createCanvas(720, 360)
  for (let i = 0; i < p.width; i++) {
    const amount = p.map(i, 0, p.width, 0, p.PI)
    coswave[i] = p.abs(p.cos(amount))
  }
  p.background(255)
  p.noLoop()
}

export const draw = (p: p5) => {
  let y1 = 0
  let y2 = p.height / 3

  for (let i = 0; i < p.width; i+=3) {
    p.stroke(coswave[i] * 255)
    p.line(i, y1, i, y2)
  }

  y1 = y2
  y2 = y1 + y1

  for (let i = 0; i < p.width; i+=3) {
    p.stroke((coswave[i] * 255) / 4)
    p.line(i, y1, i, y2)
  }

  y1 = y2
  y2 = p.height

  for (let i = 0; i < p.width; i+=3) {
    p.stroke(255 - coswave[i] * 255)
    p.line(i, y1, i, y2)
  }
}