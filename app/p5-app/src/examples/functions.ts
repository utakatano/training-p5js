import p5 from "p5"

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.background(51)
  p.noStroke()
  p.noLoop()
}

export const draw = (p: p5) => {
  const drawTarget = (xloc: number, yloc: number, size: number, num: number) => {
    const grayvalues = 255 / num
    const steps = size / num
    for (let i = 0; i < num; i++) {
      p.fill(i * grayvalues)
      p.ellipse(xloc, yloc, size - i * steps, size - i * steps)
    }
  }

  drawTarget(p.width * 0.25, p.height * 0.4, 200, 4)
  drawTarget(p.width * 0.5, p.height * 0.5, 300, 10)
  drawTarget(p.width * 0.75, p.height * 0.3, 120, 6)
}