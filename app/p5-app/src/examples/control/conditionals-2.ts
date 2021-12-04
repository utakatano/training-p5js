import p5 from "p5";

const drawObjects = (p: p5, color1: number, color2: number, color3: number) => {
  for (let i = 2; i < p.width - 2; i+=4) {
    if (i % 20 === 0) {
      p.stroke(color1)
      p.line(i, 80, i, p.height / 2)
    } else if (i % 10 === 0) {
      p.stroke(color2)
      p.line(i, 20, i, 180)
    } else {
      p.stroke(color3)
      p.line(i, p.height / 2, i, p.height - 20)
    }
  }
}

export const setup = (p: p5) => {
  p.createCanvas(720, 360)
  p.background(0)
}

export const draw = (p: p5) => {
  p.background(0)

  const current = Date.now() / 1000

  drawObjects(
    p,
    Math.abs(Math.sin(current) * 255),
    Math.abs(Math.cos(current + 50) * 255),
    Math.abs(Math.sin(current + 100) * 255),
  )
}