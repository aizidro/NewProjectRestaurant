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