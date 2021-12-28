import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.background(255)
  p.noStroke()
}

export const draw = (p: p5) => {
  p.background(255)
  const from = p.color(255, 0, 0, 0.2 * 255)
  const to = p.color(0, 0, 255, 0.2 * 255)
  const c1 = p.lerpColor(from, to, 0.33)
  const c2 = p.lerpColor(from, to, 0.66)

  for (let i = 0; i < 15; i++) {
    p.fill(from)
    p.quad(
      p.random(-40, 220), p.random(p.height),
      p.random(-40, 220), p.random(p.height),
      p.random(-40, 220), p.random(p.height),
      p.random(-40, 220), p.random(p.height),
    )

    p.fill(c1)
    p.quad(
      p.random(140, 380), p.random(p.height),
      p.random(140, 380), p.random(p.height),
      p.random(140, 380), p.random(p.height),
      p.random(140, 380), p.random(p.height),
    )

    p.fill(c2)
    p.quad(
      p.random(320, 580), p.random(p.height),
      p.random(320, 580), p.random(p.height),
      p.random(320, 580), p.random(p.height),
      p.random(320, 580), p.random(p.height),
    )

    p.fill(to)
    p.quad(
      p.random(500, 760), p.random(p.height),
      p.random(500, 760), p.random(p.height),
      p.random(500, 760), p.random(p.height),
      p.random(500, 760), p.random(p.height),
    )
  }
}