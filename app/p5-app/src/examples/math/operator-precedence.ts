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
  p.rect(4 + 2 * 8, 52, 290, 48)
  p.rect((4 + 2) * 8, 100, 290, 49)

  p.stroke(153)
  for (let i = 0; i < p.width; i+=2) {
    if ((i > 20 && i < 50) || (i > 100 && i < p.width - 20)) {
      p.line(i, 151, i, p.height -1)
    }
  }
}