import prisma from '../../../prisma/db';
import { hashPassword } from '../../../middleware/password';

export default async function POST(req,res) {
  const { username, email, password } = req.body; 
  const hashedPassword = await hashPassword(password);
  let existingUser;
  try {
   existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }catch(err){
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
  if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }
    let user 
  try {
    user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
  res.status(201).json({ message: 'User registered successfully', user });

}



