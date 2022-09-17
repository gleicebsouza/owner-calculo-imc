//Para retornar apenas o cálculo do IMC:
/\*
function IMC (weight, height){
return weight / ((height / 100) \*\* 2).toFixed(2)
}
function printPatientIMC(patient){
return` Paciente ${patient.name} possui o IMC de ${IMC(patient.weight,patient.height)}`
}
for (let patient of patients) {
let IMCmessage = printPatientIMC(patient)
alert(IMCmessage)

\*/
/\* 3 MANEIRAS DE CRIAR E ATRIBUIR FUNÇÃO A UM EVENTO:

1. FUNÇÃO ANONIMA
   form.onsubmit = function(){}

2.ARROW FUNCTION
form.onsubmit = () => {}

3.FUNÇÃO NAMED
form.onsubmit = handleSubmit
function handleSubmit(){}
\*/

// EVITE O PADRÃO: event.preventDefault

//VARIÁVEIS - VARIABLES

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')

/_ Uma função atribuida a uma propriedade:
const Modal = {
open: function(){},
close:function(){}
}
_/

//Estrutura de dados para separar as responsabilidades dentro do código. Criamos um objeto com propriedade e valores. 'Object literal'
const Modal = {

wrapper: document.querySelector('.modal-wrapper'),
message: document.querySelector('.modal .title span'),
buttonClose: document.querySelector('.modal button.close'),

open (){
Modal.wrapper.classList.add('open')
},
close(){
Modal.wrapper.classList.remove('open')
}
}

//EVENTO
form.onsubmit = function (event) {
event.preventDefault()

const weight = inputWeight.value
const height = inputHeight.value

const result = IMC(weight, height)
const message = `Seu IMC é de ${result}`
console.log(result)

Modal.message.innerText = message
Modal.open()
}
Modal.buttonClose.onclick = () => {
Modal.close()
}

function IMC(weight, height) {
return weight / ((height / 100) \*\* 2).toFixed(2)
}
