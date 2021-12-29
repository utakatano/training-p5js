import p5 from "p5"

let a: number
let b: number
let direction: boolean

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.colorMode(p.RGB, p.width)
  a = 0
  b = p.width
  direction = true
  p.frameRate(30)
}

export const draw = (p: p5) => {
  a++
  if (a > p.width) {
    a = 0
    direction = !direction
  }
  if (direction === true) {
    p.stroke(a)
  } else {
    p.stroke(p.width - a)
  }
  p.line(a, 0, a, p.height / 2)

  b--
  if (b < 0) {
    b = p.width
  }
  if (direction === true) {
    p.stroke(p.width - b)
  } else {
    p.stroke(b)
  }
  p.line(b, p.height / 2 + 1, b, p.height)
}