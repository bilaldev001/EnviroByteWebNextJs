const morgan = require('morgan');

const loggerMiddleware = (handler) => (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    morgan('dev')(req, res, () => {
      handler(req, res);
    });
  } else {
    handler(req, res);  
  }
};

export default loggerMiddleware;
