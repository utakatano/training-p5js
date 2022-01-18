import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
}

let t = 0

export const draw = (p: p5) => {
  const x1 = (t: number) => {
    return p.sin(t/10) * 125 + p.sin(t/20) * 125 + p.sin(t/30) * 125
  }

  const y1 = (t: number) => {
    return p.cos(t/10) * 125 + p.cos(t/20) * 125 + p.cos(t/30) * 125
  }

  const x2 = (t: number) => {
    return p.sin(t/15) * 125 + p.sin(t/25) * 125 + p.sin(t/35) * 125
  }

  const y2 = (t: number) => {
    return p.cos(t/15) * 125 + p.cos(t/25) * 125 + p.cos(t/35) * 125
  }

  p.background('#fff')
  p.translate(p.width / 2, p.height / 2)
  p.stroke('#0f0f0f')
  p.strokeWeight(1.5)
  for (let i = 0; i < 100; i++) {
    p.line(x1(t+i), y1(t+i), x2(t+i) + 20, y2(t+i) + 20)
  }
  t += 0.15
}