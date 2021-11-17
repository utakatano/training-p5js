import p5 from "p5"

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
}

export const draw = (p: p5) => {
  p.background(102)

  p.push()
  p.translate(p.width * 0.2, p.height * 0.5)
  p.rotate(p.frameCount / 200.0)
  
}