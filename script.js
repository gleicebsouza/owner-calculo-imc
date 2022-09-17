// ERROR LINHA 68 :if (showAlertError) {
/* 
Propriedades que são Objetos:
[] DOM - Document Object Model
[#] OBJETOS
  - .classList 
  - querySelector
[#] PROGRAMAÇÃO IMPERATIVA : maneiras de pensar, dar ordens do passo a passo do que será realizado
[#]Event-driven
  - eventos
[#] FUNÇÕES
  - Anonima
  - Arrow function 
[#] FUNÇÕES CALLBACKS 
  - chamar a função de volta
[#] REFATORAÇÃO
  - Mudar o código sem alterar o seu comportamento
  - deixar o código performatico

*/
/* 3 MANEIRAS DE CRIAR E ATRIBUIR FUNÇÃO A UM EVENTO:

1. FUNÇÃO ANONIMA
form.onsubmit = function(){}

2.ARROW FUNCTION
form.onsubmit = () => {}

3.FUNÇÃO NAMED
form.onsubmit = handleSubmit
function handleSubmit(){}
*/
import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

//VARIÁVEIS - VARIABLES

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')

/* Uma função atribuida a uma propriedade:
const Modal = {
  open: function(){},
  close:function(){}
}
*/

//Estrutura de dados para separar as responsabilidades dentro do código. Criamos um objeto com propriedade e valores. 'Object literal'

//EVENTO
form.onsubmit = event => {
  event.preventDefault()
  // EVITE O PADRÃO: event.preventDefault

  const weight = inputWeight.value
  const height = inputHeight.value

  //alerta de erro
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }
  // fechar o alerta de erro
  AlertError.close()

  /*teste de mesa:

   return;
   console.log(notANumber(weight))
   console.log(notANumber(height))
*/

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

// Fechar janela de erro ao ccomeçar a digitar
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
