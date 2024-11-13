
//Criando variaveis para armazenar dados digitados
var nome = document.querySelector('#nome')
var email = document.querySelector('#email')
var telefone = document.querySelector('#tel')
var cpf = document.querySelector('#cpf')
var senha = document.querySelector('#senha')


//Exibindo MODAL
var buttonModal = document.querySelector('#modal')
var modal = document.querySelector('.telaDeCadastro')
buttonModal.addEventListener('click', () => {
    modal.showModal();
})

//Armazenando dados no LocalStorage

var submit = document.querySelector('.enviarDados')

submit.addEventListener('click', ()=>{
    alert("Cadastro Realizado com sucesso, agradecemos a confiança")
    localStorage.setItem('nome', nome.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('telefone', telefone.value)
    localStorage.setItem('cpf', cpf.value)
})
 