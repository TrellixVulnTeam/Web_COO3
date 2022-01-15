import Modal from './modal.js';

const modal = Modal();
const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector(".modal button");

//pegar os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

  checkButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener("click", handleClick);
  });

//botao delete acionado
  const deleteButton = document.querySelectorAll(".actions a.delete");

    deleteButton.forEach(button => {
      button.addEventListener("click", (event) => handleClick(event, false));
    });

    function handleClick(event, check = true){

      const text  = check ? "Marcar como lida" : "Excluir" 

      modalTitle.innerHTML = `${text} esta pergunta?`
      modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
      //abrir modal
      modal.open();
    };

   