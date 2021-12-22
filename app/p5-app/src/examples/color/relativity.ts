import p5 from "p5";

let a: p5.Color
let b: p5.Color
let c: p5.Color
let d: p5.Color
let e: p5.Color

export const setup = (p: p5) =>  {
  p.createCanvas(710, 400)
  p.noStroke()
  a = p.color(165, 167, 20)
  b = p.color(77, 86, 59)
  c = p.color(42, 106, 105)
  d = p.color(165, 89, 20)
  e = p.color(146, 150, 127)
  p.noLoop()
}

export const draw = (p: p5) => {
  const drawBand = (v: p5.Color, w: p5.Color, x: p5.Color, y: p5.Color, z: p5.Color, ypos: number, barWidth: number) => {
    const num = 5
    const colorOrder = [v, w, x, y, z]
    for (let i = 0; i < p.width; i += barWidth * num) {
      for (let j = 0; j < num; j++) {
        p.fill(colorOrder[j])
        p.rect(i + j * barWidth, ypos, barWidth, p.height / 2)
      }
    }
  }

  drawBand(a, b, c, d, e, 0, p.width / 128)
  drawBand(c, a, d, b, e, p.height / 2, p.width / 128)
}