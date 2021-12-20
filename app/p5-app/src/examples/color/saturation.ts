import p5 from "p5"

const barWidth = 20
let lastBar = -1

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.colorMode(p.HSB, p.width, p.height, 100)
  p.noStroke()
}

export const draw = (p: p5) => {
  const whichBar = p.mouseX / barWidth
  if (whichBar !== lastBar) {
    const barX = whichBar * barWidth
    p.fill(barX, p.mouseY, 66)
    p.rect(barX, 0, barWidth, p.height)
    lastBar = whichBar
  }
}