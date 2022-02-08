import p5 from "p5";

const values: number[] = []
let i = 0
let j = 0

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  for (let i = 0; i < p.width / 8; i++) {
    values.push(p.random(p.height))
  }  
}

const bubbleSort = (p: p5) => {
  for (let k = 0; k < 8; k++) {
    if (i < values.length) {
      const temp = values[j]
      if (values[j] > values[j + 1]) {
        values[j] = values[j + 1]
        values[j + 1] = temp
      }
      j++

      if (j >= values.length - i - 1) {
        j = 0
        i++
      }
    } else {
      p.noLoop()
    }
  }
}

const simulateSorting = (p: p5) => {
  for (let i = 0; i < values.length; i++) {
    p.stroke(100, 143, 143)
    p.fill(50)
    p.rect(i * 8, p.height, 8, -values[i], 20)
  }
}

export const draw = (p: p5) => {
  p.background(220)
  bubbleSort(p)
  simulateSorting(p)
}