import p5 from "p5";

let img: p5.Image
let imgMask: p5.Image

export const preload = (p: p5) => {
  img = p.loadImage('/assets/moonwalk.jpeg')
  imgMask = p.loadImage('/assets/mask.png')
}

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  img.mask(imgMask)
  p.imageMode(p.CENTER)
}

export const draw = (p: p5) => {
  p.background(0, 102, 153)
}