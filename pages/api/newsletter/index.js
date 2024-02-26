import prisma from "../../../prisma/db";
const sendEmail = require("../../../middleware/email");

export default async function POST(req, res) {
    const {email} = req.body
    let existingData
    try {
         existingData = await prisma.subscriber.findFirst({
            where: {
                email: email,
            },
     } )
     
     if(existingData){
      return  res.status(409).json({ message: 'you already subscribed' });

     }     
        await prisma.subscriber.create({
            data: {
                email,
            },
        });
    await sendEmail({
            email:email,
            subject: 'subscribe our news Letter ',
            message:'Thank you to subscribe our news Letter'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' });

    }
    res.status(201).json({ message: 'you added on our blogs newsletter' });
  }