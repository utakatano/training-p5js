import p5 from "p5";

let xpos1: number
let xpos2: number
let xpos3: number
let xpos4: number

const thin = 8
const thick = 36

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.noStroke()
  xpos1 = p.width / 2
  xpos2 = p.width / 2
  xpos3 = p.width / 2
  xpos4 = p.width / 2
}

export const draw = (p: p5) => {
  p.background(0)

  const mx = p.mouseX * 0.4 - p.width / 5.0
  const height = p.height / 2

  p.fill(102)
  p.rect(xpos2, 0, thick, height)
  p.fill(204)
  p.rect(xpos1, 0, thin, height)
  p.fill(102)
  p.rect(xpos4, p.height / 2, thick, height)
  p.fill(204)
  p.rect(xpos3, p.height / 2, thin, height)

  xpos1 += mx / 16
  xpos2 += mx / 64
  xpos3 -= mx / 16
  xpos4 -= mx / 64

  if (xpos1 < -thin) {
    xpos1 = p.width
  }
  if (xpos1 > p.width) {
    xpos1 = -thin
  }
  if (xpos2 < -thick) {
    xpos2 = p.width
  }
  if (xpos2 > p.width) {
    xpos2 = -thick
  }
  if (xpos3 < -thin) {
    xpos3 = p.width
  }
  if (xpos3 > p.width) {
    xpos3 = -thin
  }
  if (xpos4 < -thick) {
    xpos4 = p.width
  }
  if (xpos4 > p.width) {
    xpos4 = -thick
  }
}