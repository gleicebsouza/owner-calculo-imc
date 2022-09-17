// Trabalhar com modulos - separar as funções em um arquivo

export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

// FECHAR MODAL USANDO - ESC
window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  console.log(event.key)

  if (event.key === 'Escape') {
    Modal.close()
  }
}

/*
Poderia fechar o modal assim,mas ao usar "One e o evento, só posso usar ele apenas uma vez, ou um por aplicativo. considerando o ultimo feito"

window.onKeydown = handleKeydown
function handleKeydown(event){}
*/
