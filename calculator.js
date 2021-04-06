var visor = ''
var oper = ''
var num1 = 0
var num2 = 0
var res = 0

function clicouBotao(num) {
  visor = visor + num
  document.getElementById('display').innerHTML = visor
}

function clicouClear() {
  visor = ''
  document.getElementById('display').innerHTML = visor
}

function clicouDiv() {
  oper = 'div'
  num1 = parseInt(visor)
  clicouClear()
}

function clicouMult() {
  oper = 'mult'
  num1 = parseInt(visor)
  clicouClear()
}

function clicouSub() {
  oper = 'sub'
  num1 = parseInt(visor)
  clicouClear()
}

function clicouSum() {
  oper = 'sum'
  num1 = parseInt(visor)
  clicouClear()
}

function clicouResult() {
  num2 = parseInt(visor)
  clicouClear()
  switch(oper) {
    case 'sum':
      res = num1 + num2
      visor = visor + res
      break;
    case 'sub':
      res = num1 - num2
      visor = visor + res
      break;
    case 'mult':
      res = num1 * num2
      visor = visor + res
      break;
    case 'div':
      res = num1 / num2
      visor = visor + res
      break;
    default:
      visor = '0'
      break;
  }
  document.getElementById('display').innerHTML = visor
}