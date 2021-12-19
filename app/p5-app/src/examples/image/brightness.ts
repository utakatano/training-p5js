import p5 from "p5";

let img: p5.Image

export const preload = (p: p5) => {
  img = p.loadImage('/assets/rover_wide.jpeg')  
}

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.pixelDensity(1)
  p.frameRate(30)
}

export const draw = (p: p5) => {
  p.image(img, 0, 0)
  p.loadPixels()
  img.loadPixels()

  for (let x = 0; x < img.width; x++) {
    for(let y = 0; y < img.height; y++) {
      const loc = (x + y * img.width) * 4
      let r = img.pixels[loc]
      const maxdist = 50
      const d = p.dist(x, y, p.mouseX, p.mouseY)
      const adjustbrightness = 255 * (maxdist - d) / maxdist
      r += adjustbrightness

      r = p.constrain(r, 0, 255)
      const pixloc = (y * p.width + x) * 4
      p.pixels[pixloc] = r
      p.pixels[pixloc + 1] = r
      p.pixels[pixloc + 2] = r
      p.pixels[pixloc + 3] = 255
    }
  }
  p.updatePixels()
}