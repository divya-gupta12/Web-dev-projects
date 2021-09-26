const modalcontainer = document.getElementById('modal-contianer');
const Open = document.getElementById('open');

Open.addEventListener('click', () => {
    modalcontainer.classList.add('show');
});
window.onclick = function (event) {
    if (event.target == modalcontainer) {
        modalcontainer.classList.remove('show');
    }
}
