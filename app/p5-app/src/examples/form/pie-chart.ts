import p5 from "p5"

const angles = [30, 10, 45, 35, 60, 38, 75, 67]

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  p.noStroke()
  p.noLoop()
}

export const draw = (p: p5) => {
  const pieChart = (diameter: number, data: number[]) => {
    let lastAngle = 0
    for (let i = 0; i < data.length; i++) {
      const gray = p.map(i, 0, data.length, 0, 255)
      p.fill(gray)
      p.arc(
        p.width / 2,
        p.height / 2,
        diameter,
        diameter,
        lastAngle,
        lastAngle + p.radians(angles[i])
      )
      lastAngle += p.radians(angles[i])
    }
  }

  p.background(100)
  pieChart(300, angles)
}