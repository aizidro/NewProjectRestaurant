const inpCpf = document.querySelector('#cpf');
const inpSenha = document.querySelector('#senha');
const form = document.querySelector('form');

function pegarPedidos() {
    fetch('http://localhost:3000/pedido', {method: 'GET'})
    .then(response => response.json())
    .then(dados => {
        console.log(dados)
    }).catch(err => {
        console.log('não foi possivel pesquisar os itens: ' + err)
    })
    
}