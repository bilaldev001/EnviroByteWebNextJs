import prisma from '../../../prisma/db';
const ip = require('ip');



export default async function POST(req, res) {
    try {
        const ipv4ClientIp = ip.address();

        const existingRecord = await prisma.blogView.findFirst({
            where: {
                ipAddress: ipv4ClientIp,
            },
        });
        
        if(existingRecord && existingRecord.count === 3){
          return  res.status(404).json({ message: 'you are not able to view blogs please login firts' });
        }

        if (existingRecord) {
            await prisma.blogView.update({
                where: { id: existingRecord.id },
                data: { count: existingRecord.count + 1 },
            });
        } else {
            await prisma.blogView.create({
                data: {
                    ipAddress:ipv4ClientIp,
                },
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'blogCount Added' });

}
