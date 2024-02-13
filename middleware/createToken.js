const dotenv = require('dotenv');
dotenv.config({ path: '/.env' });
const jwt = require('jsonwebtoken');
console.log(process.env.JWT_SECRET);

const createToken = (options, next) => {
  let token;
  try {
    token = jwt.sign(options, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_IN });
  } catch (err) {
    console.error(err);
    return next({ status: 500, message: 'Error creating Token' });
  }

  if (!token) {
    return next({ status: 500, message: 'Token not created' });
  }

  return token;
};

module.exports = createToken;
