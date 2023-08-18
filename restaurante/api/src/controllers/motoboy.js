const { prisma } = require("../dao/connect")

/**
 * @Params prisma - PrismaClient
 * 
 * */

const create = async (req, res) => {
    try {
        const motoboy = await prisma.motoboy.create({
            data: {
                ...req.body
            }
        });
        res.json(motoboy);
    } catch (error) {
        console.error('Error creating menu:', error);
        res.status(500).json({ error: 'Failed to create user.' });
    }
};

const listar = async (req, res) => {
    if (req.params.id) {
        const id = parseInt(req.params.id);
        const motoboy = await prisma.motoboy.findUnique({
            where: {
                id: id
            }
        });
        return res.json(motoboy);
    } else {
        const motoboy = await prisma.motoboy.findMany();
        return res.json(motoboy);
    }
}

const deletar = async (req, res) => {
    const motoboyId = parseInt(req.params.id);
    try {
        const deleteMotoboy = await prisma.motoboy.delete({
            where: { 
                id: motoboyId
            }
        })
        res.json(deleteMotoboy);
    }catch (error) {
        console.error('Erro ao deletar o Motoboy: ' + error);
        res.status(500).json({ error: 'Failed to delete client.' });    
    }
}

module.exports = {create, listar, deletar};