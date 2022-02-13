import p5 from "p5";

let theta: number

export const setup = (p: p5) => {
  p.createCanvas(710, 400)  
}

const branch = (p: p5, h: number) => {
  h *= 0.66

  if (h > 2) {
    p.push()
    p.rotate(theta)
    p.line(0, 0, 0, -h)
    p.translate(0, -h)
    branch(p, h)
    p.pop()

    p.push()
    p.rotate(-theta)
    p.line(0, 0, 0, -h)
    p.translate(0, -h)
    branch(p, h)
    p.pop()
  }
}

export const draw = (p: p5) => {
  p.background(0)
  p.frameRate(30)
  p.stroke(255)

  const a = (p.mouseX / p.width) * 90
  theta = p.radians(a)
  p.translate(p.width / 2, p.height)

  p.line(0, 0, 0, -120)
  p.translate(0, -120)
  branch(p, 60)
}