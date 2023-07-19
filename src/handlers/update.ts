import prisma from "../db";

export const getUpdates = async (req, res) => {
    // const user = await prisma.product.findFirst({
    // })
    // res.json({data: user.products})
};
export const getOneUpdate = async (req, res) => {
    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id,
        },
    });

    res.json({ data: update });
};
export const createUpdate = async (req, res) => {};
export const updateUpdate = async (req, res) => {};

export const deleteUpdate = async (req, res) => {};
