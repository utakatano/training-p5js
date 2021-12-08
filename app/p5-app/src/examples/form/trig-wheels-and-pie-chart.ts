import p5 from "p5";

export const setup = (p: p5) => {
  const colorWheel = (x: number, y: number, rad: number) => {
    p.strokeWeight(10)
    p.strokeCap(p.SQUARE)

    for (let a = 0; a < 360; a += 10) {
      p.stroke(a, 150, 200)
      p.line(x, y, x + rad * p.cos(a), y + rad * p.sin(a))
    }
  }

  const drawSlice = (fColor: string, x: number, y: number, d: number, percent1: number, percent2: number) => {
    p.fill(fColor)
    p.arc(x, y, d, d, -90 + percent1 * 360, -90 + percent2 * 360)
  }

  const pieChartPop = (x: number, y: number) => {
    const [total, child, young, adult, senior, elder] = [577, 103, 69, 122, 170, 113]
    let startValue = 0
    let range = 0

    range = child / total
    drawSlice('blue', x, y, 200, startValue, startValue + range)
    startValue += range

    range = young / total
    drawSlice('orange', x, y, 200, startValue, startValue + range)
    startValue += range

    range = adult / total
    drawSlice('green', x, y, 200, startValue, startValue + range)
    startValue += range

    range = senior / total
    drawSlice('tan', x, y, 200, startValue, startValue + range)
    startValue += range

    range = elder / total
    drawSlice('pink', x, y, 200, startValue, startValue + range)
    startValue += range
  }

  p.createCanvas(400, 400)
  p.colorMode(p.HSB)
  p.angleMode(p.DEGREES)

  const x = p.width / 2
  const y = p.height / 2 + 100
  colorWheel(x, y, 100)

  p.noStroke()
  pieChartPop(200, 100)
}