import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.background(51)
  p.noFill()
  p.stroke(51)

  p.stroke(204)
  for (let i = 0; i < p.width - 20; i+=4) {
    if (i > 30 + 70) {
      p.line(i, 0, i, 50)
    }
  }

  p.stroke(255)
}