import p5 from "p5"
import { Spring } from "./classes/Spring"

const num = 3
const springs: Spring[] = []

const options = [
  [240, 260,  40, 0.98, 8.0, 0.1],
  [320, 210, 120, 0.95, 9.0, 0.1],
  [180, 170, 200, 0.90, 9.9, 0.1],
]

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.noStroke()

  for (let i = 0; i < options.length; i++) {
    springs[i] = new Spring(
      p,
      options[i][0],
      options[i][1],
      options[i][2],
      options[i][3],
      options[i][4],
      options[i][5],
      springs,
      i
    )
  }
}

export const draw = (p: p5) => {
  p.background(51)

  for (let i = 0; i < num; i++) {
    springs[i].update()
    springs[i].display()
  }
}

export const mousePressed = () => {
  for (let i = 0; i < num; i++) {
    springs[i].pressed()
  } 
}

export const mouseReleased = () => {
  for (let i = 0; i < num; i++) {
    springs[i].released()
  } 
}