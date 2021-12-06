import p5 from "p5";

let where = 0

export const setup = (p: p5) => {
  p.createCanvas(400, 400)  
}

export const draw = (p: p5) => {
  if ((where < 0) || (where > p.height)) {
    p.background('beige')
  } else {
    p.background('chocolate')
  }

  if (p.mouseIsPressed && p.keyIsPressed) {
    p.fill('cyan')
  } else {
    p.fill(255)
  }

  p.rect(where, where, 40, 40)

  p.rect(p.width - where - 40, where, 40, 40)

  where = where + 1

  p.text(`where is ${where}`, 150, 30)

  if (!(p.key === 'q' || p.key === 'Q')) {
    p.fill('purple')
  } else {
    p.fill('dodgerBlue')
  }

  p.text(`Did you type a q or Q? ${p.key}`, 150, 70)

  const withinRect = (p.mouseX >= 150) &&
    (p.mouseX <= 150 + 100) &&
    (p.mouseY >= 300) &&
    (p.mouseY <= 300 + 40)

  if (withinRect) {
    p.fill('pink')
  } else {
    p.fill('orange')
  }

  p.rect(150, 300, 100, 40)
  p.fill(0)
  p.text(`withinRect ${withinRect}`, 160, 320)
}

export const mousePressed = () => {
  where = -50
}