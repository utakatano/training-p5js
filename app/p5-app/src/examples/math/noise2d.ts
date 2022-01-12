import p5 from "p5"

let noiseVal: number
let noiseScale = 0.02

export const setup = (p: p5) => {
  p.createCanvas(640, 360)
  p.frameRate(1)
}

export const draw = (p: p5) => {
  p.background(0)

  for (let y = 0; y < p.height - 30; y++) {
    for (let x = 0; x < p.width / 2; x++) {
      p.noiseDetail(2, 0.2)
      noiseVal = p.noise((p.mouseX + x) * noiseScale, (p.mouseY + y) * noiseScale)
      p.stroke(noiseVal * 255)
      p.point(x, y)
    }
  }

  for (let y = 0; y < p.height - 30; y++) {
    for (let x = p.width / 2; x < p.width; x++) {
      p.noiseDetail(5, 0.5)
      noiseVal = p.noise((p.mouseX + x) * noiseScale, (p.mouseY + y) * noiseScale)
      p.stroke(noiseVal * 255)
      p.point(x, y)
    }
  }

  p.textSize(18)
  p.fill(255, 255, 255)
  p.text('Noise2D with 2 octaves and 0.2 falloff', 10, 350)
  p.text('Noise2D with 1 octaves and 0.7 falloff', 330, 350)
}