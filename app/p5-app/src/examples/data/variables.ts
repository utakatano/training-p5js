import p5 from "p5";

export const setup = (p: p5) => {
  const drawLineContents = (x1: number, y1: number, x2: number) => {
    p.line(x1, y1, x2, y1)
    p.line(x1, y1 + 10, x2, y1 + 10)
    p.line(x1, y1 + 20, x2, y1 + 20)
    p.line(x1, y1 + 30, x2, y1 + 30)
  }

  p.createCanvas(720, 400)
  p.background(0)
  p.stroke(153)
  p.strokeWeight(4)
  p.strokeCap(p.SQUARE)

  let a = 50
  let b = 120
  let c = 180

  drawLineContents(a, b, a + c)

  a = a + c
  b = p.height - b

  drawLineContents(a, b, a + c)

  a = a + c
  b = p.height - b

  drawLineContents(a, b, a + c)
}