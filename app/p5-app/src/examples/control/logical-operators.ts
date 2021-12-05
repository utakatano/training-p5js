import p5 from "p5";

export const setup = (p: p5) => {
  let test = false

  p.createCanvas(720, 360)
  p.background(126)

  for (let i = 5; i <= p.height; i+=5) {
    p.stroke(0)
    if (i > 35 && i < 100) {
      p.line(p.width / 4, i, p.width / 2, i)
      test = false
    }

    p.stroke(76)
    if (i <= 35 || i >= 100) {
      p.line(p.width / 2, i, p.width, i)
      test = true
    }

    if (test) {
      p.stroke(0)
      p.point(p.width / 3, i)
    }
  }
}