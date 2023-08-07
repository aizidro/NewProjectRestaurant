const { prisma } = require("../dao/connect")

/**
 * @Params prisma - PrismaClient
 * 
 * */

const create = async (req, res) => {
    try {
        const user = await prisma.cliente.create({
            data: {
                ...req.body
            }
        });
        res.json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user.' });
    }
};

const autenticar = async (req, res) => {
    const { cpf, senha } = req.body
    try {
        const cliente = await prisma.cliente.findUnique({ // findUnique: procura apenas um cliente
            where: { // onde o email for igual ao email do usuario digitado
                cpf: cpf,
            }
        })

        if(!cliente) { // se não encontrar o cliente
            return res.status(404).json({error:'Cliente não encontrado'})
        }

        if(cliente.senha != senha){ //se a senha digitada é diferente da senha do cliente
            return res.status(401).json({error:'Senha invalida'})
        }
        res.json({message:'Autenticação bem sucedida',cliente}); // retorna o usuario encontrado
    }
    catch (error) {
        console.log('Erro na autenticação: ' + error)
        res.status(500).json({ error: 'Failed to fetch users.' });
    }
}

const deletar = async (req, res) => {
    const clienteId = parseInt(req.params.id);
    try {
        const deleteClient = await prisma.cliente.delete({
            where: { 
                id: clienteId
            }
        })
        res.json(deleteClient);
    }catch (error) {
        console.error('Erro ao deletar o cliente: ' + error);
        res.status(500).json({ error: 'Failed to delete client.' });    
    }
}

module.exports = {
    create,
    autenticar,
    deletar
};
