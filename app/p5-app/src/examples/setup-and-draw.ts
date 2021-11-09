import p5 from "p5"

let y = 100

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.stroke(255)
  p.frameRate(30)
}

export const draw = (p: p5) => {
  p.background(0) // Set the background to black
  y = y - 1
  if (y < 0) {
    y = p.height
  }
  p.line(0, y, p.width, y)
}