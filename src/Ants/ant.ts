import { getRandomNumber, getRandomDelta } from './helperFunctions'
import { isNearCenter as isNearHole, withinRange, getHeight } from './helperFunctions'
import { getAngelFromXY, drawRotatedImage } from './helperFunctions'
import { ants } from './antsController'
import './ants.css'

import antImgSrc from './images/ant.png'
console.log(antImgSrc)
const ANT_IMAGE = new Image()
ANT_IMAGE.src = antImgSrc

export default class Ant {
  private x: number
  private y: number
  private size: number
  private everReset: boolean
  private dy: number
  private dx: number
  private newDy: number
  private newDx: number
  private numOfMovesToReset: number
  private yDir: 'up' | 'down'
  private xDir: 'left' | 'right'
  private steps: number
  constructor() {
    //Position of ant on the canvas, at first position will be in the center
    this.x = 0
    this.y = getHeight()

    this.size = 30
    this.yDir = 'up'
    this.xDir = 'right'
    this.steps = 0
    //Direction of ant heading vertically and horizontally (delta y and delta x) at first will default to 0
    //Later on code will generate random numbers between -DELTA_RANGE and DELTA_RANGE (i.e. between -5 and 5)
    //for example if dy is 2 and dx is -4 ant will move 2px down and 4px to the left every move
    this.resetDirection()

    this.everReset = false
    this.draw()
  }

  resetDirection() {
    const dy = getRandomDelta()
    const dx = getRandomDelta()

    this.steps++

    console.log('steps', this.steps)
    if (this.steps % 3 === 0) {
      console.log('this.steps')
      this.yDir = Math.round(Math.random()) ? 'up' : 'down'
      this.xDir = Math.round(Math.random()) ? 'left' : 'right'
    }

    console.log(this.xDir, this.dx, this.yDir, this.dy)

    if (this.yDir === 'up') {
      this.newDy = -dy
    } else {
      this.newDy = dy
    }

    if (this.xDir === 'right') {
      this.newDx = dx
    } else {
      this.newDx = -dx
    }


    if (!this.everReset) {
      this.dy = this.newDy
      this.dx = this.newDx
      this.everReset = true
    }

    //Once every 30 - 60 moves ant direction get reset, every time the ant direction get reset
    //the code makes a decision of how many moves until next reset takes place...
    this.numOfMovesToReset = getRandomNumber(30, 60)
  }


  setNewDirection(dy: number, dx: number) {
    this.dy = dy
    this.dx = dx
  }

  nearHole() {
    //check if ant is near the center
    return isNearHole(this.y, this.x, 10)
  }

  remove() {
    //Get the index of the ant
    const index = ants.indexOf(this)
    if (index > -1) {
      //Remove the ant from the ants array
      ants.splice(index, 1)
    }
  }

  draw() {
    if (this.numOfMovesToReset === 0) {
      this.resetDirection()
    }

    //Instead of abruptly changing the new dy/dx change it gradually. i.e. every time the direction is being reset
    //Don't change it at once, instead, change it gradually until the current y/x matches the newDy/x
    const diff = 0.2

    //To prevent a bug when the current dy/dx is 0.1 close to the newDx/y the ant jumps back and forth
    if (withinRange(this.newDy, this.dy, diff)) {
      this.dy = this.newDy
    }
    if (withinRange(this.newDx, this.dx, diff)) {
      this.dx = this.newDx
    }

    //If the newDy is more than current dy increase the current dy, if it's less decrease it
    if (this.newDy > this.dy) {
      this.dy += diff
    } else if (this.newDy < this.dy) {
      this.dy -= diff
    }

    //Same for dx
    if (this.newDx > this.dx) {
      this.dx += diff
    } else if (this.newDx < this.dx) {
      this.dx -= diff
    }

    //If the ant is near the hole and never been rested remove the ant
    if (this.nearHole() && this.everReset) {
      this.remove()
    }

    //Set the position of the ant to the old position + the dy and dx
    this.x += this.dx
    this.y += this.dy

    //The code to bounce the ant if it hit the wall

    //Check the Right edge
    if (this.x > window.innerWidth + this.size) {
      this.dx = -Math.abs(this.dx)
    }

    //Check the Left edge
    if (this.x < 0 - this.size) {
      this.dx = Math.abs(this.dx)
    }

    //Check the Bottom edge
    if (this.y > getHeight() + this.size) {
      this.dy = -Math.abs(this.dy)
    }

    //Check the Top edge
    if (this.y < 0 - this.size) {
      this.dy = Math.abs(this.dy)
    }

    //And finally draw the ant to the screen with the right angel
    const angel = getAngelFromXY(this.dx, this.dy)
    drawRotatedImage(ANT_IMAGE, this.x, this.y, angel)

    this.numOfMovesToReset -= 1
  }
}
