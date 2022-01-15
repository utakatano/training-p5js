import p5 from "p5"

const x_increment = 0.01
const z_increment = 0.02
let z_off = 0

export const setup = (p: p5) => {
  p.createCanvas(640, 360)
  p.frameRate(20)
}

export const draw = (p: p5) => {
  let x_off = 0
  let y_off = 0
  p.background(0)
  p.noiseDetail(8, 0.65)

  for (let y = 0; y < p.height; y++) {
    x_off += x_increment
    y_off = 0

    for (let x = 0; x < p.width; x++) {
      const noiseVal = p.noise(x_off, y_off, z_off)
      p.stroke(noiseVal * 255)
      y_off += x_increment
      p.point(x, y)
    }
  }

  z_off += z_increment
}