import p5 from "p5"

let r: number
let theta = 0
let theta_vel = 0
let theta_acc = 0.0001

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  r = p.height * 0.45
}

export const draw = (p: p5) => {
  p.background(0)

  p.translate(p.width / 2, p.height / 2)

  const x = r * p.cos(theta)
  const y = r * p.sin(theta)

  p.ellipseMode(p.CENTER)
  p.noStroke()
  p.fill(200)
  p.ellipse(x, y, 32, 32)

  theta_vel += theta_acc
  theta += theta_vel
}