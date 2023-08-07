const inpCpf = document.querySelector('#cpf');
const inpSenha = document.querySelector('#senha');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault()
    const body = {'cpf':inpCpf.value,'senha':inpSenha.value}

    const options = {
        'method': 'POST',
        'headers': {'Content-Type': 'application/json'}
    }

    options.body = JSON.stringify(body)

    fetch('http://localhost:3000/autenticar', options)
    .then(resp => {return resp.json()})
    .then((response, error) => console.log(response, error))

    // try {
    //     const response = await fetch('https://localhost:3000/autenticar', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(body)
    //     });
    
    // console.log(response);

    // }catch (error) {
    //     console.error('Sua autenticação deu erro:', error);
    // }
})