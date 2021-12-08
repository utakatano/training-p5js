import p5 from "p5"

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
}

export const draw = (p: p5) => {
  const polygon = (x: number, y: number, radius: number, npoints: number) => {
    const angle = p.TWO_PI / npoints
    p.beginShape()
    for (let a = 0; a < p.TWO_PI; a += angle) {
      const sx = x + p.cos(a) * radius
      const sy = y + p.sin(a) * radius
      p.vertex(sx, sy)
    }
    p.endShape(p.CLOSE)
  }


  p.background(102)

  p.push()
  p.translate(p.width * 0.2, p.height * 0.5)
  p.rotate(p.frameCount / 200.0)
  polygon(0, 0, 82, 3)
  p.pop()

  p.push()
  p.translate(p.width * 0.5, p.height * 0.5)
  p.rotate(p.frameCount / 50.0)
  polygon(0, 0, 80, 20)
  p.pop()

  p.push()
  p.translate(p.width * 0.8, p.height * 0.5)
  p.rotate(p.frameCount / -100.0)
  polygon(0, 0, 70, 7)
  p.pop()  
}