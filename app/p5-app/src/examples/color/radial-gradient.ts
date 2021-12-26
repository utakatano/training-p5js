import p5 from "p5";

let dim: number

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  dim = p.width / 2
  p.background(0)
  p.colorMode(p.HSB, 360, 100, 100)
  p.noStroke()
  p.ellipseMode(p.RADIUS)
  p.frameRate(1)
}

export const draw = (p: p5) => {
  const drawGradient = (x: number, y: number) => {
    const radius = dim / 2
    let h = p.random(0, 360)
    for (let r = radius; r > 0; --r) {
      p.fill(h, 90, 90)
      p.ellipse(x, y, r, r)
      h = (h + 1) % 360
    }
  }

  p.background(0)
  for (let x = 0; x <= p.width; x += dim) {
    drawGradient(x, p.height / 2)
  }
}