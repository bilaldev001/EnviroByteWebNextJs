import prisma from '../../../prisma/db';


export default async function GET(req,res) {
    let user ;
    try {
        user = await prisma.user.findMany({})

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(201).json({  user });
}