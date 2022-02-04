import p5 from "p5"

const springHeight = 32
const maxHeight = 280
const minHeight =  20

let right: number
let left: number
let over = false
let move = false

const M = 0.8
const K = 0.2
const D = 0.92
const R = 150

let ps = R
let vs = 0.0
let as = 0
let f = 0

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.rectMode(p.CORNERS)
  p.noStroke()
  left = p.width / 2 - 100
  right = p.width / 2 + 100
}

const drawSpring = (p: p5) => {
  p.fill(0.2)
  const baseWidth = 0.5 * ps + -8
  p.rect(p.width / 2 - baseWidth, ps + springHeight, p.width / 2 + baseWidth, p.height)

  if (over || move) {
    p.fill(255)
  } else {
    p.fill(204)
  }

  p.rect(left, ps, right, ps + springHeight)
}

const updateSpring = (p: p5) => {
  if (!move) {
    f = -K * (ps - R)
    as = f / M
    vs = D * (vs + as)
    ps = ps + vs
  }

  if (p.abs(vs) < 0.1) {
    vs = 0.0
  }

  if (p.mouseX > left && p.mouseX < right && p.mouseY > ps && p.mouseY < ps + springHeight) {
    over = true
  } else {
    over = false
  }

  if (move) {
    ps = p.mouseY - springHeight / 2
    ps = p.constrain(ps, minHeight, maxHeight)
  }
}

export const draw = (p: p5) => {
  p.background(102)
  updateSpring(p)
  drawSpring(p)
}

export const mousePressed = () => {
  if (over) {
    move = true
  }
}

export const mouseReleased = () => {
  move = false
}