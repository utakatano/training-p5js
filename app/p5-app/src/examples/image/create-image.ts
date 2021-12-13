import p5 from "p5";

let img: p5.Image

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  img = p.createImage(230, 230)
  img.loadPixels()
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      const a = p.map(y, 0, img.height, 255, 0)
      img.set(x, y, [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), a])
    }
  }
  img.updatePixels()
}

export const draw = (p: p5) => {
  p.background(0)
  p.image(img, 90, 80)
  p.image(img, p.mouseX - img.width / 2, p.mouseY - img.height / 2)
}