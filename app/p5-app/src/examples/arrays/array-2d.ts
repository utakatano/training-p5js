import p5 from "p5"

const distances: number[][] = []
const spacer = 10

let maxDistance

export const setup = (p: p5) => {
  p.createCanvas(720, 360)
  maxDistance = p.dist(p.width / 2, p.height / 2, p.width, p.height)

  for (let x = 0; x < p.width; x++) {
    distances[x] = []
    for (let y = 0; y < p.height; y++) {
      const distance = p.dist(p.width / 2, p.height / 2, x, y)
      distances[x][y] = (distance / maxDistance) * 255
    }
  }
  // p.noLoop()
}

export const draw = (p: p5) => {
  p.background(Math.sin(Date.now() * 0.0005) * 255)

  for (let x = 0; x < p.width; x += spacer) {
    for (let y = 0; y < p.height; y += spacer) {
      p.stroke(distances[x][y])
      p.point(x + spacer / 2, y + spacer / 2)
    }
  }
}