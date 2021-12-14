import p5 from "p5";

let img: p5.Image

const smallPoint = 4
const largePoint = 40

export const preload = (p: p5) => {
  img = p.loadImage('/assets/moonwalk.jpeg')  
}

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.imageMode(p.CENTER)
  p.noStroke()
  p.background(255)
  img.loadPixels()
}

export const draw = (p: p5) => {
  const pointillize = p.map(p.mouseX, 0, p.width, smallPoint, largePoint)
  const x = p.floor(p.random(img.width))
  const y = p.floor(p.random(img.height))
  const pix = img.get(x, y)
  p.fill(pix[0], 128)
  p.ellipse(x, y, pointillize, pointillize)
}