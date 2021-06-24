import Modal from './modal.js';

const modal = Modal();

const checkButtons = document.querySelectorAll('.check');
const modalTitle = document.querySelector('.modal h2');
const modalButton = document.querySelector('.modal button');

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
});

const deleteButtons = document.querySelectorAll('.trash');

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        handleClick(event, false);
    });
});

function handleClick (event, check = true) {
    modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir pergunta';
    modalButton.innerHTML = check ? 'Sim, marcar como lida.' : 'Sim, Excluir';
    modal.open();
}