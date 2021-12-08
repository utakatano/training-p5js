import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(710, 400, p.WEBGL)
}

export const draw = (p: p5) => {
  p.background(100)

  p.noStroke()
  p.fill(50)
  p.push()

  p.translate(-275, 175)
  p.rotateY(1.25)
  p.rotateX(-0.9)
  p.box(100)
  p.pop()

  p.noFill()
  p.stroke(255)
  p.push()
  p.translate(500, p.height * 0.35, -200)
  p.sphere(300)
  p.pop()
}