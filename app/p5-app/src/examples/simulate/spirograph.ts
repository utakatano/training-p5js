import p5 from "p5";

const NUMSINES = 20
const sines: number[] = new Array(NUMSINES)
let rad: number

const fund = 0.005
const ratio = 1
const alpha = 50

let trace = false

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  rad = p.height / 4
  p.background(204)

  for (let i = 0; i < sines.length; i++) {
    sines[i] = p.PI
  }
}

export const draw = (p: p5) => {
  if (!trace) {
    p.background(204)
    p.stroke(0, 255)
    p.noFill()
  }

  p.push()
  p.translate(p.width / 2, p.height / 2)

  for (let i = 0; i < sines.length; i++) {
    let erad = 0
    if (trace) {
      p.stroke(0, 0, 255 * (p.float(`${i}`) / sines.length), alpha)
      p.fill(0, 0, 255, alpha / 2)
      erad = 5.0 * (1.0 - p.float(`${i}`) / sines.length)
    }

    let radius = rad / (i + 1)
    p.rotate(sines[i])
    if (!trace) p.ellipse(0, 0, radius * 2, radius * 2)
    p.push()
    p.translate(0, radius)
    if (!trace) p.ellipse(0, 0, 5, 5)
    if (trace) p.ellipse(0, 0, erad, erad)
    p.pop()
    p.translate(0, radius)
    sines[i] = (sines[i] + (fund + (fund * i * ratio))) % p.TWO_PI
  }
  p.pop()
}

export const keyReleased = (p: p5) => {
  if (p.key === ' ') {
    trace = !trace
    p.background(255)
  }
}