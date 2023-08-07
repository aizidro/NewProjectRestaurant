const { prisma } = require("../dao/connect")

/**
 * @Params prisma - PrismaClient
 * 
 * */

const create = async (req, res) => {
    try {
        const cardapio = await prisma.cardapio.create({
            data: {
                ...req.body
            }
        });
        res.json(cardapio);
    } catch (error) {
        console.error('Error creating menu:', error);
        res.status(500).json({ error: 'Failed to create user.' });
    }
};

const listar = async (req, res) => {
    try {
        const cardapio = await prisma.cardapio.findMany()
        res.json(cardapio);
    }catch(error){
        res.status(500).json({ error: 'Failed to fetch menus:' + error.message });
    }
}

const deletar = async (req, res) => {
    const cardapioId = parseInt(req.params.id);
    try {
        const deleteCardapio = await prisma.cardapio.delete({
            where: { 
                id: cardapioId
            }
        })
        res.json(deleteCardapio);
    }catch (error) {
        console.error('Erro ao deletar o Cardapio: ' + error);
        res.status(500).json({ error: 'Failed to delete client.' });    
    }
}

module.exports = {create, listar, deletar};