import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.stroke(255)
  p.noFill()
}

export const draw = (p: p5) => {
  p.background(0)
  for (let i = 0; i < 200; i += 20) {
    p.bezier(
      p.mouseX - i / 2.0,
      40 + i,
      410,
      20,
      440,
      300,
      240 - i / 16.0,
      300 + i / 8.0
    )
  }
}