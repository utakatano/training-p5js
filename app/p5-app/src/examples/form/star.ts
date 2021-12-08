import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
}

export const draw = (p: p5) => {
  const start = (x: number, y: number, radius1: number, radius2: number, npoints: number) => {
    const angle = p.TWO_PI / npoints
    const halfAngle = angle / 2.0
    p.beginShape()

    for (let a = 0; a < p.TWO_PI; a += angle) {
      let sx = x + p.cos(a) * radius2
      let sy = y + p.sin(a) * radius2
      p.vertex(sx, sy)
      sx = x + p.cos(a + halfAngle) * radius1
      sy = y + p.sin(a + halfAngle) * radius1
      p.vertex(sx, sy)
    }
    p.endShape(p.CLOSE)
  }

  p.background(102)

  p.push()
  p.translate(p.width * 0.2, p.height * 0.5)
  p.rotate(p.frameCount / 200.0)
  start(0, 0, 5, 70, 3)
  p.pop()

  p.push()
  p.translate(p.width * 0.5, p.height * 0.5)
  p.rotate(p.frameCount / 50.0)
  start(0, 0, 80, 100, 40)
  p.pop()

  p.push()
  p.translate(p.width * 0.8, p.height * 0.5)
  p.rotate(p.frameCount / -100.0)
  start(0, 0, 30, 70, 5)
  p.pop()
}