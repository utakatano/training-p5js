import p5 from "p5"

let x: number
let y: number
let currentTangle = 0
let step = 20
let angle = 90

let theString = 'A'
const numLoops = 5
let theRules: string[][] = []
theRules[0] = ['A', '-BF+AFA+FB-']
theRules[1] = ['B', '+AF-BFB-FA-']

let whereInString = 0

const linedenMayer = (s: string) => {
  let outPutString = ''

  for (let i = 0; i < s.length; i++) {
    let isMatch = 0
    for (let j = 0; j < theRules.length; j++) {
      if (s[i] === theRules[j][0]) {
        outPutString += theRules[j][1]
        isMatch = 1
        break
      }
    }
    if (isMatch === 0) outPutString += s[i]
  }
  return outPutString
}

const drawIt = (p: p5, k: string) => {
  if (k === 'F') {
    const x1 = x + step * p.cos(p.radians(currentTangle))
    const y1 = y + step * p.sin(p.radians(currentTangle))
    p.line(x, y, x1, y1)

    x = x1
    y = y1
  } else if (k === '+') {
    currentTangle += angle
  } else if (k === '-') {
    currentTangle -= angle
  }

  const r = p.random(128, 255)
  const g = p.random(0, 192)
  const b = p.random(0, 50)
  const a = p.random(50, 100)

  let radius = 0
  radius += p.random(0, 15)
  radius += p.random(0, 15)
  radius += p.random(0, 15)
  radius = radius / 2

  p.fill(r, g, b, a)
  p.ellipse(x, y, radius, radius)
}

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.background(255)
  p.stroke(0, 0, 0, 255)

  x = 0
  y = p.height - 1

  for (let i = 0; i < numLoops; i++) {
    theString = linedenMayer(theString)
  }
}

export const draw = (p: p5) => {
  drawIt(p, theString[whereInString])

  whereInString++
  if (whereInString > theString.length - 1) whereInString = 0
}