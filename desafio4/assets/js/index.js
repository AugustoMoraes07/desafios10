function meuEscopo(){

    const sectionCta = document.querySelector('section.cta')
    const form = document.querySelector('form');
    const nome = form.querySelector('#nome');
    const email = form.querySelector('#email');
    const vagasEl = document.querySelector('.vagas-restantes');
    const btn = form.querySelector('button');
    const escassez = document.querySelector('.escassez');
    
    setInterval(() => {
    escassez.classList.toggle('hover');
}, 800)

if (!localStorage.getItem('vagas')) {
    localStorage.setItem('vagas', 10);
}

function atualizarVagas() {
    let vagas = Number(localStorage.getItem('vagas'));
    vagasEl.innerHTML = `${vagas} vagas restantes`;
    
    mentoriaFechada();
}
atualizarVagas();

form.addEventListener('submit', e => {
    e.preventDefault();
    
    verificandoVagas();
})

function limpaInput() {
    nome.value = '';
    email.value = '';
    nome.focus();
}

function verificandoVagas() {
    let vagas = Number(localStorage.getItem('vagas'));
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();

    if(!emailValido(emailValor)){
        alert('Por favor, insira um e-mail válido!');
        email.value = '';
        email.focus();
        return;
    }

    if (vagas > 0) {
        vagas--;
        localStorage.setItem('vagas', vagas.toString());
        
        salvarInscrito(nomeValor, emailValor);
        
        alert('Formulário enviado com sucesso!');
        atualizarVagas();
        limpaInput();
    } else {
        alert('[ERRO]Desculpe, todas as vagas foram preenchidas');
        mentoriaFechada();
    }


}

function emailValido(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function mentoriaFechada() {
    let vagas = Number(localStorage.getItem('vagas'));
    
    if (vagas === 0) {
        vagasEl.style.color = 'red';
        // Estilo Vermelho
        vagasEl.style.color = 'red';
        btn.innerText = 'FECHADO';
        btn.style.background = 'red';
        
        // Botão desativado
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
        
        // Efeito hover no color red
        form.classList.add('mentoria-fechada');
        
        
        divExtra();
    }
}

function divExtra() {
    setTimeout(() => {
        const div = document.createElement('div');
        div.classList.add('div-extra');
        div.innerText = 'As vagas foram encerradas.\nAguarde uma nova oportunidade';
        sectionCta.appendChild(div);
        form.style.filter = "blur(3px)";
        form.style.pointerEvents = 'none';
        contemplados(div);
    }, 1000);
}

function contemplados(div) {
    const btnInscritos = document.createElement('button');
    btnInscritos.innerText = 'PESSOAS INSCRITAS';
    
    btnInscritos.addEventListener('click', () => {
        const inscritos = JSON.parse(localStorage.getItem('inscritos')) || [];
        if(inscritos.length === 0){
            alert('Nenhuma pessoa inscrita ainda.');
            return;
        } else{
            window.location.href = './agradecimento.html';
        }
    })
    div.appendChild(btnInscritos);
}




document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'r') {
        localStorage.setItem('vagas', 1);
        alert('Vagas resetadas.');
        location.reload();
        
        form.classList.remove('mentoria-fechada');
    }
});

function salvarInscrito(nome, email) {
    let inscritos = JSON.parse(localStorage.getItem('inscritos')) || [];
    inscritos.push({ nome, email });
    localStorage.setItem('inscritos', JSON.stringify(inscritos));
}

function mudarPagina() {
    setTimeout(() => {
        window.location.href = './agradecimento.html';
    }, 5000)
}
}
meuEscopo();