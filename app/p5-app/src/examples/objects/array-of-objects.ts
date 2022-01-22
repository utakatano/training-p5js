import p5 from "p5";
import { Jitter } from "./classes/Jitter";

let bugs: Jitter[] = []

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  for (let i = 0; i < 50; i++) {
    bugs.push(new Jitter(p))
  }
}

export const draw = (p: p5) => {
  p.background(50, 89, 100)
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move()
    bugs[i].display()
  }
}