import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.pixelDensity(1)
}

export const draw = (p: p5) => {
  p.loadPixels()
  const n = (p.mouseX * 10.0) / p.width
  const w = 16.0
  const h = 16.0
  const dx = w / p.width
  const dy = h / p.height
  let x = -w / 2
  let y

  let cols = p.width
  let rows = p.height

  for (let i = 0; i < cols; i+=1) {
    y = -h / 2
    for (let j = 0; j < rows; j+=1) {
      const r = p.sqrt(x * x + y * y)
      const theta = p.atan2(y, x)
      const val = p.sin(n * p.cos(r) + 5 * theta)
      const bw = p.color(((val + 1) * 255) / 2)
      const index = 4 * (i + j * p.width)
      p.pixels[index] = p.red(bw)
      p.pixels[index + 1] = p.green(bw)
      p.pixels[index + 2] = p.blue(bw)
      p.pixels[index + 3] = p.alpha(bw)

      y += dy
    }
    x += dx
  }
  p.updatePixels()
}