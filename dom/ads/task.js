const rotator = document.querySelectorAll('.rotator__case');

let i = 0;
let timerId = setInterval(() => {
    rotator.forEach((el) => {
        el.classList.remove('rotator__case_active');
    });
    rotator[i].classList.add('rotator__case_active');
    i = (i + 1) % rotator.length;
}, 1000);