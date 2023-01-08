// EcmaScript - 2015 ES6 MODULES (Export - Import)

//Import DEFAULT
//Mudou para default
import Controls from './controls.js' //Por estar importando no modo default pode ser qualquer nome no lugar do controls.reset()

//Import NAMED
//Mudou para default
import Timer from './timer.js'

import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
 } from './elements.js'

 //Import dos sons
 import Sound from './sounds.js'

//import { elements } from './elements.js'

//Desestruturação - Para fazer com que os elements funcionem dentro do index.js - Para deixar mais limo
/*const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} = elements*/

//Event-Driven (Movido a eventos - A DOM funciona desta foram)
// Programação imperativa (Dar ordens passo a passo para a aplicação)
// Programação declarativa (Fazer a aplicação simplesmente fazer)
// callback (Função que chama função)
// Refatoração: mudar um código para deixá-lo mais entendível - deixar o código mais performático - SEM ALTERAR suas funcionalidades

// buttonPlay.addEventListener('click', toggleClick)
buttonPlay.addEventListener('click', playClick)
// buttonPlay.addEventListener('click', countDown)
// buttonPause.addEventListener('click', toggleClick)
buttonPause.addEventListener('click', pauseClick)
buttonStop.addEventListener('click', stopClick)
buttonSet.addEventListener('click', setClick)
buttonSoundOn.addEventListener('click', soundStart)
buttonSoundOff.addEventListener('click', soundStop)

//Injeção de dependências
const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

//Factory - Basicamente você criar um objeto com todas as depedências necessárias para rodar a parte do código que está em outro modulo - neste caso timer.js - e para usa-lo você deve acessa-lo com o  timer.
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  // timerTimeOut,
  resetControl: controls.reset //Propriedade
}) //Injeção de depedências - Por conta do Factory

//Injetando o sound com Factory
const sound = Sound()

function playClick() {
  controls.play() //Para utilizar o play() que está injetado aqui porem foi exportado do controls.js
  
  timer.countDown() //Para utilizar o contDown que está injetado aqui porem que foi exportado do timer.js
  sound.pressButton()//Som de botão pressionado
}

function pauseClick() {
  controls.pause() //Para utilizar o pause() que está injetado aqui porem foi exportado do controls.js
  timer.hold() //Corrigir o pause
  sound.pressButton()//Som de botão pressionado

}

function stopClick() {
  controls.reset() //Para utilizar o reset() que está injetado aqui porem foi exportado do controls.js
  timer.reset() //Para utilizar o reset() que está injetado aqui porem foi exportado do timer.js
  sound.pressButton()//Som de botão pressionado

}

function setClick() {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
}

function soundStart() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.pause()
}

function soundStop() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sound.bgAudio.play()
}
