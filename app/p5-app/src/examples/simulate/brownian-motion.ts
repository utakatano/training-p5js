import p5 from "p5";

const num = 2000
const range = 6

const ax: number[] = []
const ay: number[] = []

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  for (let i = 0; i < num; i++) {
    ax[i] = p.width / 2
    ay[i] = p.height / 2
  }
  p.frameRate(30)
}

export const draw = (p: p5) => {
  p.background(51)

  for (let i = 1; i < num; i++) {
    ax[i - 1] = ax[i]
    ay[i - 1] = ay[i]
  }

  ax[num - 1] += p.random(-range, range)
  ay[num - 1] += p.random(-range, range)

  ax[num - 1] = p.constrain(ax[num - 1], 0, p.width)
  ay[num - 1] = p.constrain(ay[num - 1], 0, p.height)

  for (let j = 1; j < num; j++) {
    const val = j / num * 204.0 + 51
    p.stroke(val)
    p.line(ax[j - 1], ay[j - 1], ax[j], ay[j])
  }
}