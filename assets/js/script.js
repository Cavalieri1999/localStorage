
//Recebendo dados do local storage
var nome = localStorage.getItem('nome')
var email = localStorage.getItem('email')
var telefone = localStorage.getItem('telefone')
var cpf = localStorage.getItem('cpf')



//Evento para ser executar sempre que a pagina for carregada
addEventListener('DOMContentLoaded', () => {
    document.querySelector('.saudacao').innerHTML = ('Seja bem vindo,  ' + nome)
    document.querySelector('#nome').value = nome
    document.querySelector('#email').value = email
    document.querySelector('#tel').value = telefone
    document.querySelector('#cpf').value = cpf
})

//Abrir modal

const abrirModal = document.querySelector('.abrirModal')
const modal = document.querySelector('.modal')

abrirModal.addEventListener('click', ()=>{
    modal.showModal();
})