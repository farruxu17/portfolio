window.addEventListener('load', function () {

    let elem = document.querySelector('nav h1');
    let str = elem.innerHTML;

    elem.innerHTML = '';
    let i = 0;

    function print() {
        elem.innerHTML += str.charAt(i);
        i++;
    }
    this.setInterval(print, 90);

    let close = document.querySelector('.close');
    let menu = document.querySelector('.menu');
    let bars = document.querySelector('.brs');

    bars.addEventListener('click', function () {
        menu.style.right = '0'
    })
    close.addEventListener('click', function () {
        menu.style.right = '-35%';
    })



    new WOW().init();
})


