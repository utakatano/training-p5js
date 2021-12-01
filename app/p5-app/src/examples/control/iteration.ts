import p5 from "p5";

const num = 14

export const setup = (p: p5) => {
  const drawWhiteBars = () => {
    p.fill(255)
    let y = 60
    for (let i = 0; i < num / 3; i++) {
      p.rect(50, y, 475, 10)
      y += 20
    }
  }

  const drawGrayBars = () => {
    p.fill(51)
    let y = 40
    for (let i = 0; i < num; i++) {
      p.rect(405, y, 30, 10)
      y += 20
    }
    y = 50
    for (let i = 0; i < num; i++) {
      p.rect(425, y, 30, 10)
      y += 20
    }  
  }

  const drawThinLines = () => {
    let y = 45
    p.fill(0)
    for (let i = 0; i < num - 1; i++) {
      p.rect(120, y, 40, 1)
      y += 20
    }    
  }

  p.createCanvas(720, 360)
  p.background(102)
  p.noStroke()

  drawWhiteBars()
  drawGrayBars()
  drawThinLines()
}