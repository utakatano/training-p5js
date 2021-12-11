import p5 from "p5";

let img: p5.Image
let offset = 0
let easing = 0.05

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  img = p.loadImage('/assets/moonwalk.jpeg')
}

export const draw = (p: p5) => {
  p.image(img, 0, 0)
  const dx = p.mouseX - img.width / 2 - offset
  offset += dx * easing
  p.tint(255, 127)
  p.image(img, offset, 0)
}