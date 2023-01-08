export default function () {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true") //new Audio(Função construtura que cria um objeto de audio e fica armazenado nesta cons buttonPress)

  bgAudio.loop = true //Rodar o som de fundo eternamente - Como é uma propriedade ela necessita receber um valor true - pois ao não receber ela irá retornar falso

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  // function bgAudioStart() {
  //   bgAudio.play()
  // }

  return {
    pressButton,//buttonPressAudio, //áudio de pressionamento de botão
    timeEnd,//kitchenTimer, //cronômetro de cozinha
    bgAudio //Audio de fundo
  }
}
