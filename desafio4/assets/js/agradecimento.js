const thead = document.querySelector('table thead');

const inscritos = JSON.parse(localStorage.getItem('inscritos')) || [];

if(inscritos.length > 0){
    const trHead = document.createElement('tr');
    trHead.innerHTML = 
    `
    <th>Nome</th>
    <th>Email</th>
    `;
    thead.appendChild(trHead);

    const tbody = document.createElement('tbody');

    inscritos.forEach(inscrito =>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${inscrito.nome}</td>
            <td>${inscrito.email}</td>
        `;
        tbody.appendChild(tr);
    });

    document.querySelector('table').appendChild(tbody);
} 

function mudarPagina(){
    window.location.href = './index.html';
}