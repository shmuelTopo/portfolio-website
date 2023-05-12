import Ant from './ant'
import { drawRotatedImage, getHeight, resizeCanvas } from './helperFunctions'
import antHoleSrc from './images/antHole.png'
import $ from 'jquery'

export const ants: Ant[] = []

const ANT_HOLE = new Image()
ANT_HOLE.src = antHoleSrc
let antsIntervals: ReturnType<typeof setInterval>
let moveIntervals: ReturnType<typeof setInterval>

let antsSpeed = 30
let antsRate = 300

setInterval(() => {
  console.log('speed', antsSpeed, 'rate', antsRate)
}, 2000)

export function initializeAntController() {
  //When the browser changes size change the canvas size
  window.addEventListener('resize', resizeCanvas)

  //First time (even without the window being resized)
  resizeCanvas()

  if (ANT_HOLE.complete) {
    moveAnts()
  } else {
    ANT_HOLE.addEventListener('load', moveAnts)
  }

  $('#reset').on('click', () => {
    ants.length = 0
    stop()
    clearAnts()
    localStorage.removeItem('ants')
  })

  stop()
  start()
}

function start() {
  console.log('starting')
  $('#startPause').text('Pause')

  antsIntervals = setInterval(() => {
    createAnt()
  }, antsRate)

  //Set interval to redraw all the ants
  moveIntervals = setInterval(() => {
    moveAnts()
  }, antsSpeed)
}

function stop() {
  clearInterval(antsIntervals)
  clearInterval(moveIntervals)
  $('#startPause').text('Start')
}

function createAnt() {
  ants.push(new Ant())
  const newAnt = {}
  Object.assign(newAnt, ants[0])
}

function moveAnts() {
  //Go through all the ants and draw their current position
  clearAnts()
  if (ants) {
    ants.forEach((ant) => ant.draw())
  }
}

function clearAnts() {
  //Resize the canvas and by doing that you basically erasing all the ants
  resizeCanvas()

  //All the calculations as for where to draw the hole of the ants (I played around with the numbers)
  drawRotatedImage(ANT_HOLE, -25, getHeight() - 50, 180, 180, 180)
}