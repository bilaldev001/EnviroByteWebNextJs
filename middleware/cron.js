const cron = require('node-cron');
cron.schedule('* * * * * *', () => {
    console.log('Running cron job every second...');
  });