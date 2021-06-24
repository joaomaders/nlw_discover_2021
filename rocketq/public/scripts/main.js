import Modal from './modal.js';

const modal = Modal();

const checkButtons = document.querySelectorAll('.check');
const modalTitle = document.querySelector('.modal h2');
const modalButton = document.querySelector('.modal button');

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick);
});

const deleteButtons = document.querySelectorAll('.trash');

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        handleClick(event, false);
    });
});

function handleClick (event, check = true) {
    event.preventDefault();
    const text = check ? "Marcar como lida" : "Excluir";

    const roomId = document.getElementById('room-id').dataset.id;
    const questionId = event.target.dataset.id;
    const slug = check ? "check" : "delete";

    const form = document.querySelector('.modal form');
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text}`;
    modalButton.innerHTML =  `Sim, ${text.toLowerCase()}.`;
    check ? modalButton.classList.remove('danger') : modalButton.classList.add('danger');

    modal.open();
}