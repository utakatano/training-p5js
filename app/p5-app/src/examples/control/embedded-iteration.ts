import p5 from "p5";

const drawObjects = (p: p5, color: number) => {
  const gridSize = 35

  for (let x = gridSize; x <= p.width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= p.height - gridSize; y += gridSize) {
      p.noStroke()
      p.fill(color)
      p.rect(x - 1, y - 1, 3, 3)
      p.stroke(255, 50)
      p.line(x, y, p.width / 2, p.height / 2)
    }
  }
}

export const setup = (p: p5) => {
  p.createCanvas(720, 360)
  p.background(0)
  p.noStroke()

  drawObjects(p, 255)
}

export const draw = (p: p5) => {
  p.background(0)

  drawObjects(p, Math.floor(Math.abs(Math.sin(Date.now())) * 255))
}