import Ant from './ant'
import { drawRotatedImage, getHeight, resizeCanvas } from './helperFunctions'
import antHoleSrc from './images/antHole.png'
import $ from 'jquery'

export const ants: Ant[] = []

const ANT_HOLE = new Image()
ANT_HOLE.src = antHoleSrc
let antsIntervals: ReturnType<typeof setInterval>
let moveIntervals: ReturnType<typeof setInterval>

const initialAntsRate = 1000
let antSpeedIntervals = 20

let antsRate = initialAntsRate
let antsAreMoving = false
let goHome = false
let theme: 'light' | 'dark'
let setTheme: setThemeFunction | undefined

type setThemeFunction = (newTheme: 'dark' | 'light') => void

export function initializeAntController(setTheTheme: setThemeFunction) {
  setTheme = setTheTheme
  //When the browser changes size change the canvas size
  window.addEventListener('resize', resizeCanvas)

  //First time (even without the window being resized)
  resizeCanvas()

  if (ANT_HOLE.complete) {
    moveAnts()
  } else {
    ANT_HOLE.addEventListener('load', moveAnts)
  }

  return (newTheme: 'light' | 'dark' ) => {
    console.log('theme change', newTheme)
    theme = newTheme
    if(theme === 'dark') stopAnts()
  }
}

window.addEventListener('click', (e) => {

  if (e.pageX < 80 && getHeight() - e.pageY < 80) {
    e.preventDefault()
    if (!antsAreMoving) {
      if(!global.confirm("Do you want to lunch Ant attack?\n" +
      "note the more you click on the hole the more ants will come out\n" +
      "also ants hate the dark so if you want to remove the ants just switch to dark mode!!")) return
      antsAreMoving = true
      goHome = false
      console.log('setTheme', setTheme)
      if(setTheme) setTheme('light')
    }
    

    antsRate -= 10
    start()
  }
})

function stopAnts() {
  antsRate = initialAntsRate
  clearInterval(antsIntervals)
  antsAreMoving = false
  goHome = true
}

function start() {
  stop()
  $('#startPause').text('Pause')
  createAnt()
  antsIntervals = setInterval(() => {
    createAnt()
  }, antsRate)

  //Set interval to redraw all the ants
  moveIntervals = setInterval(() => {
    moveAnts()
  }, antSpeedIntervals)
}

function stop() {
  console.log('stop the ants from moving')
  clearInterval(antsIntervals)
  clearInterval(moveIntervals)
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
    ants.forEach((ant) => ant.draw(goHome))
  }
}

function clearAnts() {
  //Resize the canvas and by doing that you basically erasing all the ants
  resizeCanvas()

  //All the calculations as for where to draw the hole of the ants (I played around with the numbers)
  drawRotatedImage(ANT_HOLE, -25, getHeight() - 50, 180, 180, 180)
}
