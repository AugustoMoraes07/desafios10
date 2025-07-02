const form = document.querySelector('form');
const nome = form.querySelector('#nome');
const email = form.querySelector('#email'); 
const vagasEl = document.querySelector('.vagas-restantes');
const btn = form.querySelector('button');
const escassez = document.querySelector('.escassez');

setInterval(() => {
    escassez.classList.toggle('hover');
}, 800)

if(!localStorage.getItem('vagas')){
    localStorage.setItem('vagas', 10);
}

function atualizarVagas(){
    let vagas = Number(localStorage.getItem('vagas'));
    vagasEl.innerHTML = `${vagas} vagas restantes`;

    mentoriaFechada();
}
atualizarVagas();

form.addEventListener('submit', e =>{
    e.preventDefault();
    
    verificandoVagas();
})

function limpaInput(){
    nome.value = '';
    email.value = '';
    nome.focus();
}

function verificandoVagas(){
let vagas = Number(localStorage.getItem('vagas'));

    if(vagas>0){
        vagas--;
        localStorage.setItem('vagas', vagas.toString());
        alert('Formulário enviado com sucesso!');
        atualizarVagas();
        limpaInput();
    }  else{
        alert('[ERRO]Desculpe, todas as vagas foram preenchidas');
        mentoriaFechada();
    }
    
    
}

function mentoriaFechada(){
    let vagas = Number(localStorage.getItem('vagas'));
    
    if(vagas == 0) {
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
    }
}

document.addEventListener('keydown', function(e){
    if(e.ctrlKey && e.key === 'r'){
        localStorage.removeItem('vagas');
        alert('Vagas resetadas.');
        location.reload();
        
        form.classList.remove('mentoria-fechada');
    }
});
