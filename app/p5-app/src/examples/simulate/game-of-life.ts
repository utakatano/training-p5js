import p5 from "p5"

const w = 20
let columns: number
let rows: number
let board: number[][]
let next: number[][]

const init = (p: p5) => {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (i === 0 || j === 0 || i === columns - 1 || j === rows - 1) board[i][j] = 0
      else board[i][j] = p.floor(p.random(2))
      next[i][j] = 0
    }
  }
}

const generate = () => {
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      let neighbors = 0
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += board[x + i][y + j]
        }
      }

      neighbors -= board[x][y]
      if      ((board[x][y] === 1) && (neighbors < 2)) next[x][y] = 0
      else if ((board[x][y] === 1) && (neighbors > 3)) next[x][y] = 0
      else if ((board[x][y] === 0) && (neighbors === 3)) next[x][y] = 1
      else                                             next[x][y] = board[x][y]
    }
  }
  let temp = board
  board = next
  next = temp
}

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  columns = p.floor(p.width / w)
  rows = p.floor(p.height / w)
  board = new Array(columns)
  for (let i = 0; i < columns; i++) {
    board[i] = new Array(rows)
  }
  next = new Array(columns)
  for (let i = 0; i < columns; i++) {
    next[i] = new Array(rows)
  }
  init(p)
}

export const draw = (p: p5) => {
  p.background(255)
  generate()
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (board[i][j] === 1) p.fill(0)
      else p.fill(255)
      p.stroke(0)
      p.rect(i * w, j * w, w - 1, w - 1)
    }
  }
}

export const mousePressed = (p: p5) => {
  init(p)
}