import p5 from "p5";
import { Jitter } from "./classes/Jitter";

let bug: Jitter

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  bug = new Jitter(p)
}

export const draw = (p: p5) => {
  p.background(50, 89, 100)
  bug.move()
  bug.display()
}