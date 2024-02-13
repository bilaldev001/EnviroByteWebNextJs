const pool = require('../db');
import {comparePasswords} from '../../../middleware/password'
import loggerMiddleware  from '../../../middleware/logger'

export default loggerMiddleware(

  async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { email, password } = req.body;
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const passwordMatch = await comparePasswords(password,user.rows[0].password);
        if (!passwordMatch) {
          return  res.status(401).json({ success: false, message: 'Password not match' });
        }   
        if (!user) {
          return res.status(401).json({ success: false, message: 'Invalid email or password' });

        } 
        res.status(200).json({ success: true, user: user.rows[0] });

      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
      }
    } else {
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
  }
  

) 


