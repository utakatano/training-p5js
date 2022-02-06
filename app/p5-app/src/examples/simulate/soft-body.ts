import p5 from "p5";

let centerX = 0.0, centerY = 0.0
let radius = 45, rotAngle = -90
let accelX = 0.0, accelY = 0.0
let deltaX = 0.0, deltaY = 0.0
let springing = 0.0009, damping = 0.98

const nodeStartX: number[] = []
const nodeStartY: number[] = []
const nodeX: number[] = []
const nodeY: number[] = []
const angle: number[] = []
const frequency: number[] = []

const nodes = 5
let organicConstant = 1.0

export const setup = (p: p5) => {
  p.createCanvas(710, 400)

  centerX = p.width / 2
  centerY = p.height / 2

  for (let i = 0; i < nodes; i++) {
    nodeStartX[i] = 0
    nodeStartY[i] = 0
    nodeY[i] = 0
    nodeY[i] = 0
    angle[i] = 0

    frequency[i] = p.random(5, 12)
  }

  p.noStroke()
  p.frameRate(30)
}

const drawShape = (p: p5) => {
  for (let i = 0; i < nodes; i++) {
    nodeStartX[i] = centerX + p.cos(p.radians(rotAngle)) * radius
    nodeStartY[i] = centerY + p.sin(p.radians(rotAngle)) * radius
    rotAngle += 360.0 / nodes
  }

  p.curveTightness(organicConstant)
  p.fill(255)
  p.beginShape()
  for (let i = 0; i < nodes; i++) {
    p.curveVertex(nodeX[i], nodeY[i])
  }
  for (let i = 0; i < nodes - 1; i++) {
    p.curveVertex(nodeX[i], nodeY[i])
  }
  p.endShape(p.CLOSE)
}

const moveShape = (p: p5) => {
  deltaX = p.mouseX - centerX
  deltaY = p.mouseY - centerY

  deltaX *= springing
  deltaY *= springing
  accelX += deltaX
  accelY += deltaY
  
  centerX += accelX
  centerY += accelY

  accelX *= damping
  accelY *= damping

  organicConstant = 1 - ((p.abs(accelX) + p.abs(accelY)) * 0.1)

  for (let i = 0; i < nodes; i++) {
    nodeX[i] = nodeStartX[i] + p.sin(p.radians(angle[i])) * (accelX * 2)
    nodeY[i] = nodeStartY[i] + p.sin(p.radians(angle[i])) * (accelY * 2)
    angle[i] += frequency[i]
  }
}


export const draw = (p: p5) => {
  p.fill(0, 100)
  p.rect(0, 0, p.width, p.height)
  drawShape(p)
  moveShape(p)
}