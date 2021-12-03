import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.background(0)
  p.stroke(255)

  let b = false
  const d = 20
  const middle = p.width / 2

  for (let i = d; i <= p.width; i += d) {
    b = i < middle

    if (b === true) {
      p.line(i, d, i, p.height - d)
    } else {
      p.line(middle, i - middle + d, p.width - d, i - middle + d)
    }
  }
}