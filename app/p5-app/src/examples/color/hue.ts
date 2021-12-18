import p5 from "p5";

const barWidth = 20
let lastBar = -1

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.colorMode(p.HSB, p.height, p.height, p.height)
  p.noStroke()
  p.background(0)
}

export const draw = (p: p5) => {
  const whichBar = p.mouseX / barWidth
  if (whichBar !== lastBar) {
    const barX = whichBar * barWidth
    p.fill(p.mouseY, p.height, p.height)
    p.rect(barX, 0, barWidth, p.height)
    lastBar = whichBar
  }
}