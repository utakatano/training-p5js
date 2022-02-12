import p5 from "p5"
import { Snowflake } from "./classes/Snowflake"

const snowflakes: Snowflake[] = []

export const setup = (p: p5) => {
  p.createCanvas(400, 600)
  p.fill(240)
  p.noStroke()
}

export const draw = (p: p5) => {
  p.background('brown')
  const t = p.frameCount / 60

  for (let i = 0; i < p.random(5); i++) {
    snowflakes.push(new Snowflake(p))
  }

  snowflakes.forEach((flake, index) => {
    flake.update(t)
    flake.display()

    if (flake.isOverHeight()) {
      snowflakes.splice(index, 1)
    }
  })
}