import p5 from "p5";

let max_distance: number

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.noStroke()
  max_distance = p.dist(0, 0, p.width, p.height)
}

export const draw = (p: p5) => {
  p.background(0)

  for (let i = 0; i <= p.width; i+=20) {
    for (let j = 0; j <= p.height; j+=20) {
      const _size = p.dist(p.mouseX, p.mouseY, i, j)
      const size = (_size / max_distance) * 66
      p.ellipse(i, j, size, size)
    }
  }
}