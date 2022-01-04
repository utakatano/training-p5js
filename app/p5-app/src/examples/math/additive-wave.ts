import p5 from "p5"

const xspacing = 8
const maxwaves = 4
const amplitude: number[] = new Array(maxwaves)
const dx: number[] = new Array(maxwaves)

let w: number
let theta = 0.0
let yvalues: number[]

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.frameRate(30)
  p.colorMode(p.RGB, 255, 255, 255, 100)
  w = p.width + 16

  // for (let i = 0; i < maxwaves; i++) {
  //   amplitude[i] = p.random(10, 30)
  //   const period = p.random(100, 300)
  //   dx[i] = (p.TWO_PI / period) * xspacing
  // }

  yvalues = new Array(p.floor(w / xspacing))
}

const calcWave = (p: p5) => {
  for (let i = 0; i < maxwaves; i++) {
    amplitude[i] = p.mouseY * 0.1 + p.random(10, 30)
    const period = p.random(100, 300)
    dx[i] = (p.TWO_PI / period) * xspacing
  }

  theta += 0.02

  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = 0
  }

  for (let j = 0; j < maxwaves; j++) {
    let x = theta
    for (let i = 0; i < yvalues.length; i++) {
      if (j % 2 == 0) yvalues[i] += p.sin(x) * amplitude[j]
      else yvalues[i] += p.cos(x) * amplitude[j]
      x += dx[j]
    }
  }
}

const renderWave = (p: p5) => {
  p.noStroke()
  p.fill(255, 50)
  p.ellipseMode(p.CENTER)
  for (let x = 0; x < yvalues.length; x++) {
    p.ellipse(x * xspacing, p.width / 2 + yvalues[x], 16, 16)
  }
}

export const draw = (p: p5) => {
  p.background(0)
  calcWave(p)
  renderWave(p)
}

