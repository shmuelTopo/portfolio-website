const DELTA_RANGE = 5
const TO_RADIANS = Math.PI / 180

//Get the canvas element and the it's context
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D
const body = document.body
const html = document.documentElement


function initializeCanvas() {
  if (!canvas || !ctx) {
    canvas = document.getElementById('theCanvas') as HTMLCanvasElement
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  }
}

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}

export function isNearCenter(positionY: number, positionX: number, nearPx: number) {
  //nearPx - how many pixels do you consider "near"

  //Check where the center px is horizontally and vertically and store the values
  const centerY = window.innerHeight / 2
  const centerX = window.innerWidth / 2

  //Check the different between the center position and positionX and positionY
  const diffY = centerY - positionY
  const diffX = centerX - positionX

  //return rather or not the diffX and diffY is less than nearPx
  return Math.abs(diffY) < nearPx && Math.abs(diffX) < nearPx
}

export function withinRange(num1: number, num2: number, range: number) {
  //Check if 2 numbers are withing the range of each other
  return Math.max(num1, num2) - Math.min(num1, num2) <= range
}

export function getRandomDelta() {
  return getRandomNumber(1, DELTA_RANGE + 1)
}

export function getAngelFromXY(dx: number, dy: number) {
  return (Math.atan2(dx, -dy) * 180) / Math.PI
}

export function getHeight() {
  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
}

//Function to resize the canvas based of browser size
export function resizeCanvas() {
  
  initializeCanvas()
  canvas.width = window.innerWidth
  canvas.height = getHeight()
}

export function drawRotatedImage(image: HTMLImageElement, x: number, y: number, angle: number, sizeX?: number, sizeY?: number) {
  initializeCanvas()

  // save the current co-ordinate system
  ctx.save()
  // move to the middle of where we want to draw our image
  ctx.translate(x, y)
  // rotate around that point, converting our angle from degrees to radians
  ctx.rotate(angle * TO_RADIANS)
  // draw it up and to the left by half the width  and height of the image
  if (sizeX && sizeY) {
    ctx.drawImage(image, -(image.width / 2), -(image.height / 2), sizeX, sizeY)
  } else {
    ctx.drawImage(image, -(image.width / 2), -(image.height / 2))
  }
  // and restore the coords to how they were when we began
  ctx.restore()
}
