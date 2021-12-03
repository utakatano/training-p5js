import p5 from "p5"

let a = 80

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.background(0)
  p.stroke(255)
  p.noLoop()
}

export const draw = (p: p5) => {
  const drawAnotherLine = () => {
    let a = 320
    p.line(a, 0, a, p.height)
  }

  const drawYetAnotherLine = () => {
    p.line(a + 3, 0, a + 3, p.height)
  }

  p.line(a, 0, a, p.height)

  for (let a = 120; a < 200; a += 3) {
    p.line(a, 0, a, p.height)
  }

  drawAnotherLine()

  drawYetAnotherLine()
}