import p5 from "p5";


export const setup = (p: p5) => {
  p.createCanvas(400, 400)
  p.strokeWeight(3)
  p.rectMode(p.CENTER)

  p.noStroke()
  p.fill('beige')
  p.rect(5, p.height / 2, 10, p.height)
  p.rect(p.width - 5, p.height / 2, 10, p.height)
  p.fill('orange')
  p.stroke('brown')
}

export const draw = (p: p5) => {
  p.point(p.mouseX, p.mouseY)


  if (p.mouseX < 10) {
    p.circle(p.width / 2, p.mouseY, 20)
  }

  if (p.mouseX > p.width - 10) {
    p.square(p.width / 2, p.mouseY, 20)
  }
}