const form = document.querySelector('.form');
const nome = form.querySelector('#nome');
const email = form.querySelector('#email');
let res = document.querySelector('.res');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nomeDigitado = nome.value;
    localStorage.setItem('nome', nomeDigitado);

    setTimeout(function () {
        res.innerHTML = '<p>E-BOOK ENVIADO COM SUCESSO !</p><br>';
        res.innerHTML += '<p>VERIFIQUE SEU EMAIL. </p>';
        res.classList.add('show');
    }, 1000);
    setTimeout(function () {
        res.innerHTML = '';
        nome.value = '';
        email.value = '';
        nome.focus();
        res.classList.remove('show');
    }, 5000);
    setTimeout(() => {
        window.location.href = './agradecimento.html';
    }, 5100);

    

})


document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll('.text-shadow-title');

    elementos.forEach((el) => {
        const estilo = getComputedStyle(el);
        const cor = estilo.color;

        const corRGB = cor.replace(/\s/g, '').toLowerCase();

        if (corRGB === "rgb(255,255,255)" || corRGB === "#ffffff") {
            el.style.textShadow = '2px 1px 2px black';
        } else {
            el.style.textShadow = '2px 1px 2px white';
        }

    })
})





