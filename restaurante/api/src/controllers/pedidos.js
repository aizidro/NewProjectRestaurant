const { prisma } = require("../dao/connect")

/**
 * @Params prisma - PrismaClient
 * 
 * */

const create = async (req, res) => {
    try {
        const pedido = await prisma.pedido.create({
            data: {
                ...req.body
            }
        });
        res.json(pedido);
    } catch (error) {
        console.error('Error creating menu:', error);
        res.status(500).json({ error: 'Failed to create user.' });
    }
};

const listar = async (req, res) => {
    if (req.params.id) {
        const id = parseInt(req.params.id);
        const pedido = await prisma.pedido.findUnique({
            where: {
                id: id
            }
        });
        return res.json(pedido);
    } else {
        const pedido = await prisma.pedido.findMany();
        return res.json(pedido);
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
