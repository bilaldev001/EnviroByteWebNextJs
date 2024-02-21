import createToken from '../../../middleware/createToken';
import { comparePasswords } from '../../../middleware/password'
import prisma from '../../../prisma/db';



export default async function POST(req,res,next) {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
  if (!existingUser) {
    return res.status(401).json({ message: 'Invalid email' });
  }
  let passwordMatch
  try {
    passwordMatch = await comparePasswords(password,existingUser.password);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid Password' });
  }
let token;
  try {
     token = createToken({
      userId: existingUser.id,
      email: existingUser.email,
    }, next);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error create=ing token' });
  }
  res.setHeader('Set-Cookie', `access_token=${token}; Max-Age=3600; HttpOnly`);
  res.status(200).json({
    user: existingUser,
    message: 'User signin successfully',
  });
}

