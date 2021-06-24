export default function Modal() {
    const markAsReadModal = document.querySelector('.modal-background');
    const cancelButton = document.querySelector('.button.cancel');

    cancelButton.addEventListener('click', close);
    function open() {
        markAsReadModal.classList.add('active');
    }

    function close() {
        markAsReadModal.classList.remove('active');
    }

    return {
        open,
        close
    }
};