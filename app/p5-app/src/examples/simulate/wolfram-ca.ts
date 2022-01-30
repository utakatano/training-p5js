import p5 from "p5"

const w = 10
let cells: number[]
let generation = 0
const ruleSet = [0, 1, 0, 1, 1, 0, 1, 0]

export const setup = (p: p5) => {
  p.createCanvas(640, 400)
  cells = Array(p.floor(p.width / w))
  for (let i = 0; i < cells.length; i++) {
    cells[i] = 0
  }
  cells[cells.length / 2] = 1
}

const rules = (a: number, b: number, c: number) => {
  if (a === 1 && b === 1 && c === 1) return ruleSet[0]
  if (a === 1 && b === 1 && c === 0) return ruleSet[1]
  if (a === 1 && b === 0 && c === 1) return ruleSet[2]
  if (a === 1 && b === 0 && c === 0) return ruleSet[3]
  if (a === 0 && b === 1 && c === 1) return ruleSet[4]
  if (a === 0 && b === 1 && c === 0) return ruleSet[5]
  if (a === 0 && b === 0 && c === 1) return ruleSet[6]
  if (a === 0 && b === 0 && c === 0) return ruleSet[7]
  return 0
}

const generate = () => {
  const nextGen: number[] = Array(cells.length)
  for (let i = 1; i < cells.length - 1; i++) {
    const left = cells[i - 1]
    const me = cells[i]
    const right = cells[i + 1]
    nextGen[i] = rules(left, me, right)
  }
  cells = nextGen
  generation++
}

export const draw = (p: p5) => {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 1) {
      p.fill(200)
    } else {
      p.fill(51)
      p.noStroke()
      p.rect(i * w, generation * w, w, w)
    }
  }
  if (generation < p.height / w) {
    generate()
  }
}