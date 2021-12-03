import p5 from "p5";

const drawObjects = (p: p5, whiteY = 80, grayY = 20) => {

  const whiteLineHeight = p.height / 2 - 80
  const grayLineHeight = p.height / 2 - 20

  for (let i = 10; i < p.width; i+=10) {
    if (i % 20 === 0) {
      p.stroke(255)
      p.line(i, whiteY, i, whiteY + whiteLineHeight)
    } else {
      p.stroke(153)
      p.line(i, grayY, i, grayY + grayLineHeight)
    }
  }
}

export const setup = (p: p5) => {
  p.createCanvas(720, 360)
  p.background(0)
}

export const draw = (p: p5) => {
  p.background(0)

  const current = Date.now() / 3000

  drawObjects(
    p,
    80 + Math.abs(Math.sin(current) * 60),
    20 + Math.abs(Math.cos(current) * 60)
  )
}