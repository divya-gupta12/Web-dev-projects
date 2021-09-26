const modalcontainer = document.getElementById('modal-contianer');
const Open = document.getElementById('open');

Open.addEventListener('click', () => {
    modalcontainer.classList.add('show');
});

function inactivityTime() {
    let time;
    window.onload = resetTime;
    //window.onclick = resetTime;
    window.onkeypress = resetTime;
    window.ontouchstart = resetTime;
    window.onmousemove = resetTime;
    window.onmousedown = resetTime;
    window.addEventListener('scroll', resetTime, true);

    function alertUser() {
        modalcontainer.classList.add('show');
    }

    function resetTime() {
        clearTimeout(time);
        time = setTimeout(alertUser, 1000 * 25); // 25 seconds
    }
    window.onclick = function (event) {
        if (event.target == modalcontainer) {
            modalcontainer.classList.remove('show');
        }
        resetTime();
    };

};

