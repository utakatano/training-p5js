import p5 from "p5";
import { Spring2D } from "./classes/Spring2D";

let s1: Spring2D
let s2: Spring2D
const gravity = 9.0
const mass = 2.0

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.fill(255, 126)
  s1 = new Spring2D(p, 0.0, p.width / 2, mass, gravity)
  s2 = new Spring2D(p, 0.0, p.width / 2, mass, gravity)
}

export const draw = (p: p5) => {
  p.background(0)
  s1.update(p.mouseX, p.mouseY)
  s1.display(p.mouseX, p.mouseY)
  s2.update(s1.x, s1.y)
  s2.display(s1.x, s1.y)
}