import p5 from "p5";

export const setup = (p: p5) => {
  p.createCanvas(400, 600)

  const friendArray = [
    ['Nona', 'mac & cheese', 'orange', 'Eid al-fitr'],
    ['Marylin', 'ice cream', 'blue', 'Halloween'],
    ['Rashaad', 'garbage plates', 'turquoise', 'Christmas'],
    ['Ava', 'sushi', 'pink', 'New Years']
  ]
  friendArray.push(['Xavier', 'Louisiana creole', 'red', 'their birthday'])

  let y = 20
  for (let f = 0; f < friendArray.length; f++) {
    let x = 10
    for (let t = 0; t < friendArray[f].length; t++) {
      p.text(friendArray[f][t], x, y)
      x += p.textWidth(friendArray[f][t]) + 20
    }
    y += 28
  }

  for (let f = 0; f < friendArray.length; f++) {
    let x = 10
    for (let t = 0; t < friendArray[f].length; t++) {
      p.text(friendArray[f][t], x, y)
      x += p.textWidth(friendArray[f][t]) + 20
    }
  }

  y = 400
  for (let friend of friendArray) {
    let x = 10
    console.log('x and y', x, y)
    console.log('friend:', friend)
    for (let item of friend) {
      console.log('item & x:', item, x)
      p.text(item, x, y)
      x += p.textWidth(item) + 20
    }
    y += 28
  }
}