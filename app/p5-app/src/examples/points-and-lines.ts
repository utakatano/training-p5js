import p5 from "p5";

export const setup = (p: p5) => {
  const d = 70
  const p1 = d
  const p2 = p1 + d
  const p3 = p2 + d
  const p4 = p3 + d

  p.createCanvas(720, 400)
  p.background(0)
  p.noSmooth()

  p.translate(140, 0)

  p.stroke(153)
  p.line(p3, p3, p2, p3)
  p.line(p2, p3, p2, p2)
  p.line(p2, p2, p3, p2)
  p.line(p3, p2, p3, p3)

  p.stroke(255)
  p.point(p1, p1)
  p.point(p1, p3)
  p.point(p2, p4)
  p.point(p3, p1)
  p.point(p4, p2)
  p.point(p4, p4)
}