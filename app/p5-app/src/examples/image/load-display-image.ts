import p5 from "p5";

let img: p5.Image

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  img = p.loadImage('/assets/moonwalk.jpeg')
}

export const draw = (p: p5) => {
  p.image(img, 0, 0)
  p.image(img, 0, p.height / 2, img.width / 2, img.height / 2)
}