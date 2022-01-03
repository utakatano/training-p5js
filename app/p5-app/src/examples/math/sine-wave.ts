import p5 from "p5"

const xspacing = 16
const amplitude = 100.0
const period = 500.0

let w: number
let theta = 0.0
let dx: number
let yvalues: number[]

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  w = p.width + 16
  dx = (p.TWO_PI / period) * xspacing
  yvalues = new Array(p.floor(w / xspacing))
}

const calcWave = (p: p5) => {
  theta += 0.02
  let x = theta

  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = p.sin(x) * (amplitude * p.sin(Date.now() * 0.0003))
    x += dx
  }
}

const renderWave = (p: p5) => {
  p.noStroke()
  p.fill(255)
  for (let x = 0; x < yvalues.length; x++) {
    p.ellipse(x * xspacing, p.height / 2 + yvalues[x], 16, 16)
  }
}

export const draw = (p: p5) => {
  p.background(0)
  calcWave(p)
  renderWave(p)
}