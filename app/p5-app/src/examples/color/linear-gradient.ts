import p5 from "p5"

const Y_AXIS = 1
const X_AXIS = 2

let b1: p5.Color
let b2: p5.Color
let c1: p5.Color
let c2: p5.Color

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  b1 = p.color(255)
  b2 = p.color(0)
  c1 = p.color(204, 102, 0)
  c2 = p.color(0, 102, 153)

  p.noLoop()
}

export const draw = (p: p5) => {
  const setGradient = (
    x: number,
    y: number,
    w: number,
    h: number,
    c1: p5.Color,
    c2: p5.Color,
    axis: number
  ) => {
    p.noFill()

    if (axis === Y_AXIS) {
      for (let i = y; i <= y + h; i++) {
        const inter = p.map(i, y, y + h, 0, 1)
        const c = p.lerpColor(c1, c2, inter)
        p.stroke(c)
        p.line(x, i, x + w, i)
      }
    }
  }

  setGradient(0, 0, p.width / 2, p.height, b1, b2, X_AXIS)
  setGradient(p.width / 2, 0, p.width / 2, p.height, b2, b1, X_AXIS)
  setGradient(50, 90, 540, 80, c1, c2, Y_AXIS)
  setGradient(50, 190, 540, 80, c2, c1, X_AXIS)
}