// DOM (Document Object Model)

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

//let seconds
//set em algumas ocasiões é uma palavra reservada do JS

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
}

//Desestruturação
/*
export const elements = {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
}*/
