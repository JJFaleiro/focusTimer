import Sounds from './sounds.js'

//Export NAMED
//export { Timer }
//Da forma baixa ele será feita diretamente no function - É um tipo de NAMED
//Você tem que passar como objeto todas as dependecias necessárias para esse código rodar
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  // timerTimeOut,
  resetControl
  // minutes
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent) //Capturando dado que ja foi capturado anteriormente

  //exibição de tempo de atualização (atualização do display)
  function updateDisplay(newMinutes, seconds) {
    // falsy (false - 0 - "")
    // truthy
    newMinutes = newMinutes === undefined ? minutes : newMinutes //Caso TRUE = minutes - Caso FALSE = newMinutes
    //newMinutes = newMinutes || minutes (retornou falsy então deu erro) //Ou seja pego os new minutes sendo igual ele mesmo ou caso não tenha pegue os minutes

    seconds = seconds === undefined ? 0 : seconds
    //seconds = seconds || 0 retornou falsy
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    updateMinutes(minutes)
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut) //clearTimeout - é uma função do JS - Como mágica ele para todo a função do cronometro setTimeout que o timerTimeOut está armazenando
  }

  //Contagem regressiva
  //setTimeout (definir tempo limite) é uma função do JS (que recebe dois argumento - 1º É uma função e a 2º é o tempo em milessegundos (é o tempo que irá demorar para executar a função do 1º argumento))
  function countDown() {
    timerTimeOut = setTimeout(function () {
      //Declaro uma variável e armazeno o conteúdo do secondDisplay que está transformado em um dado tipo number
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      //Cronometro chegou ao fim
      if (isFinished) {
        resetControl()
        updateDisplay() //Voltando ao minutos iniciais
        Sounds().timeEnd() //Não foi declaro uma variavel sound como no index.js - portando foi necessesário fazer desta forma (ao inves de sound.timeEnd())
        return //Como já haviamos visto quando um função chega a um return - ela desconsidera todo o restante do código de uma função - ou seja irá interromper o fluxo infinito da Recursão (Função chamando ela mesma)
      }

      //Se os segungos chegarem a zero o valor de second vai ser igual a 60 (pois 60s = 1min)
      if (seconds <= 0) {
        seconds = 60

        --minutes

        //Ou seja quando chegar a 0, eu reseto os segundos para 60 e subtraio um dos minutos
        // minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
        // updateTimerDisplay(String(minutes - 1), seconds)
      }

      //então eu pego o conteúdo do secondDisplay que agora é igual ao seconds que é variável criada para ser do tipo number e subtraio 1 (a cada 1000 milessegundos = 1s)
      // secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
      updateDisplay(minutes, String(seconds - 1))
      //Transformo o resultado em uma string após fazer o calculo como tipo number (seconds -1) - adciono uma propriedade que se chama .padStart (Preenchimento no Inicio - é como se fosse um padding do CSS - pórem pé um preenchimento de dado) que recebe como parâmetro (2, '0'), o 2 é como se fosse o toFixed (é o tamanho da string) e o segundo argumento é o dado que ficará lá caso tenha menos de 2 caracteres
      //Como o 0 neste caso é uma string ele não entra no calculo em si do seconds - 1

      //***Se este if ficar acima do String(seconds - 1) - a aplicação vai para o relogio antes dos segundos zerarem - porque a mátematica dos segundos

      countDown() //Recursão (Função chamando ela mesma) - A função chamando nela mesma vai fazer com que o relógio não pare
    }, 1000) //Case 1000 milessegundos é === 1 segundo
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut) //clearTimeout - é uma função do JS - Como mágica ele para todo a função do cronometro setTimeout que o timerTimeOut está armazenando - Função que foi utilizada por um motivo e serviu para pausar o cronometro e consequentemente reiniciar apartir do pause
  }

  /*
   play.onclick = () => {
     play.classList.toggle('hide')
     pause.classList.toggle('hide')
   }
  
   pause.onclick = () => {
     play.classList.toggle('hide')
     pause.classList.toggle('hide')
   }*/
  // Factory (É uma função que irá retornar para mim um objeto)
  //ShortHand = se a propriedade de um objeto vai receber ela mesma posso escrever desta forma
  //Você precisa retornar a funções para fora do escopo - por conta das dependências
  return {
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }

  /*
   let output = {
    countDown: countDown
   }

   return output
   */
}
