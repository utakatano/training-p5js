import p5 from "p5";

let bg: p5.Image
let y = 0

export const setup = (p: p5) => {
  bg = p.loadImage('/assets/moonwalk.jpeg')
  p.createCanvas(720, 400)
}

export const draw = (p: p5) => {
  p.background(bg)

  p.stroke(226, 204, 0)
  p.line(0, y, p.width, y)

  y++
  if (y > p.height) {
    y = 0
  }
}