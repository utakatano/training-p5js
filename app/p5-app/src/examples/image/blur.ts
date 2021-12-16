import p5 from "p5";

let img: p5.Image

export const preload = (p: p5) => {
  img = p.loadImage('/assets/rover.png')
}

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.noLoop()
}

export const draw = (p: p5) => {
  const v = 1.0 / 9.0
  const kernel = [
    [v, v, v],
    [v, v, v],
    [v, v, v]
  ]

  p.image(img, 0, 0)

  const edgeImg = p.createImage(img.width, img.height)
  edgeImg.loadPixels()

  for (let x = 1; x < img.width; x++) {
    for (let y = 1; y < img.height; y++) {
      let sum = 0

      for (let kx = -1; kx <= 1; kx++) {
        for (let ky = -1; ky <= 1; ky++) {
          const xpos = x + kx
          const ypos = y + ky

          const val = p.red(img.get(xpos, ypos))
          sum += kernel[kx+1][ky+1] * val
        }
      }

      edgeImg.set(x, y, p.color(sum))
    }
  }

  edgeImg.updatePixels()
  p.image(edgeImg, img.width, 0)
}