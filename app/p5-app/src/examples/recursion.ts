import p5 from "p5"


export const setup = (p: p5) => {
  p.createCanvas(720, 560)
  p.noStroke()
  p.noLoop()
}

export const draw = (p: p5) => {
  const drawCircle = (x: number, radius: number, level: number) => {
    const tt = (126 * level) / 4.0
    // const tt = Math.random() * 255
    p.fill(tt)
    p.ellipse(x, p.height / 2, radius * 2, radius * 2)
    if (level > 1) {
      level = level - 1
      drawCircle(x - radius / 2, radius / 2, level)
      drawCircle(x + radius / 2, radius / 2, level)
    }
  }

  drawCircle(p.width / 2, 280, 6)
}