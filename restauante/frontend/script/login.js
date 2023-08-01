const inpEmail = document.querySelector('#email');
const inpSenha = document.querySelector('#senha');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault()
})

form.addEventListener('submit', async () => {
    try {
        const reponse = await fetch('https://localhost:3000/autenticar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, senha})
        });
    
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Erro na autenticação:', errorData.error);
            return;
        }
    
        const data = await reponse.json();
        console.log('Autenticação válida',data);
    
    }catch (error) {
        console.error('Sua autenticação deu erro:', error);
    }
})