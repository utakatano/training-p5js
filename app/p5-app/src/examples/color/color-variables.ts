import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.noStroke()
  p.background(51, 0, 0)

  const inside = p.color(204, 102, 0)
  const middle = p.color(204, 153, 0)
  const outside = p.color(153, 51, 0)

  p.push()
  p.translate(80, 80)
  p.fill(outside)
  p.rect(0, 0, 200, 200)
  p.fill(middle)
  p.rect(40, 60, 120, 120)
  p.fill(inside)
  p.rect(60, 90, 80, 80)
  p.pop()

  p.push()
  p.translate(360, 80)
  p.fill(inside)
  p.rect(0, 0, 200, 200)
  p.fill(outside)
  p.rect(40, 60, 120, 120)
  p.fill(middle)
  p.rect(60, 90, 80, 80)
  p.pop()
}