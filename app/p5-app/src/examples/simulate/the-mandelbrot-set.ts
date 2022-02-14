import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.pixelDensity(1)
  p.noLoop()
}

export const draw = (p: p5) => {
  p.background(0)

  const w = 4
  const h = (w * p.height) / p.width

  const xMin = -w/2
  const yMin = -h/2

  const maxiterations = 100

  const xMax = xMin + w
  const yMax = yMin + h

  const dx = (xMax - xMin) / (p.width)
  const dy = (yMax - yMin) / (p.height)

  p.loadPixels()

  let y = yMin

  for (let j = 0; j < p.height; j++) {
    let x = xMin

    for (let i = 0; i < p.width; i++) {
      let a = x
      let b = y
      let n = 0
      while (n < maxiterations) {
        const aa = a * a
        const bb = b * b
        const twoAB = 2.0 * a * b
        a = aa - bb + x
        b = twoAB + y

        if (p.dist(aa, bb, 0, 0) > 16) {
          break
        }
        n++
      }

      const pix = (i + j * p.width) * 4
      const norm = p.map(n, 0, maxiterations, 0, 1)
      let bright = p.map(p.sqrt(norm), 0, 1, 0, 255)
      if (n === maxiterations) {
        bright = 0
      } else {
        p.pixels[pix + 0] = bright
        p.pixels[pix + 1] = bright
        p.pixels[pix + 2] = bright
        p.pixels[pix + 3] = 255
      }
      x += dx
    }
    y += dy
  }
  p.updatePixels()
}