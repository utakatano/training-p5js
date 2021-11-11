import p5 from "p5"

let y:number

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.stroke(255)
  p.noLoop()
  y = p.height * 0.5
}

export const draw = (p: p5) => {
  p.background(0)
  y = y - 4
  if (y < 0) {
    y = p.height
  }
  p.line(0, y, p.width, y)
}

