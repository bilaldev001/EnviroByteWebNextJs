import prisma from '../../../../prisma/db';


export default async function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'GET') {
        let existingUser;
        try {
            existingUser = await prisma.user.findUnique({
                where: {
                    id: parseInt(id, 10)
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });

        }

        let user;
        try {
            user = await prisma.user.findUnique({
                where: {
                    id: parseInt(id, 10)
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
        res.status(201).json({ user });
    }
    else if (req.method === 'PUT') {
        const data = req.body;
        let existingUser;
        try {
            existingUser = await prisma.user.findUnique({
                where: {
                    id: parseInt(id, 10)
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });

        }
        let updatedUser;
        try {
            updatedUser = await prisma.user.update({
                where: {
                    id: parseInt(id, 10),
                },
                data: data,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }


        res.status(201).json({ updatedUser });
    }
    else if (req.method === 'DELETE') {

        let existingUser;
        try {
            existingUser = await prisma.user.findUnique({
                where: {
                    id: parseInt(id, 10)
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });

        }

     let user;
        try {
            user = await prisma.user.delete({
                where: {
                    id: parseInt(id, 10)
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal '})            
    }
    return res.status(200).json({ message: 'User delete successfully' });



}


}

