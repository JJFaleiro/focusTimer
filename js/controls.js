//Factory
export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
}) {
  function play() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  //get (obter)
  function getMinutes() {
    let newMinutes = prompt('Quantos minutos de foco você deseja:') // || 0 //Ou seja se não for inserido nada - coloque 0
    if (!newMinutes) {
      resetTimer() //Ou seja caso não tenha sido inserido nenhum valor no minutes - faça a função resetTimer que irá interromper o cronometro e irá zerar para o ultimo valor inserido
      return false //para que a função abaixo não seja rodada pois um valor já estará inserida no cronometro - forçar um valor false para dizer que não temos os minutos
    }
    // seconds = prompt('Quantos segundos de foco você deseja:')
    return newMinutes //Foi criada uma nova variável para fazer o if funcionar (Pois como minutes já existe no escopo global da aplicação - não seria possivel não existir os minutes - portanto não entraria no if - sendo assim continuaria retornando null ao não inserir nada no prompt)
    // updateTimerDisplay(minutes, 0) - RETIRADO DAQUI
    // minutesDisplay.textContent = String(minutes).padStart(2, '0')
    //Substitui o conteúdo igual ao innerText
    // secondsDisplay.textContent = String(seconds).padStart(2, '0')
    // minutesDisplay.innerText = minutes
    // secondsDisplay.innerText = seconds
  }

  //Ou seja estou retornando para o functio Controls a função resetControl
  return {
    play,
    reset,
    pause,
    getMinutes
  }
}

//Export DEFAULT
//export default resetControl //Exportar por padrão a função sem () pois se não iria executa-la - default só pode ser usado uma única vez por modulo ATENÇÃO!!!
