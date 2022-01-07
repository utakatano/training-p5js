import p5 from "p5";

let x = 0
let y = 0

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.noStroke()
}

export const draw = (p: p5) => {
  p.background(51)

  x = p.lerp(x, p.mouseX, 0.05)
  y = p.lerp(y, p.mouseY, 0.05)

  p.fill(255)
  p.stroke(255)
  p.ellipse(x, y, 66, 66)
}