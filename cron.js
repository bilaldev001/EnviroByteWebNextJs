const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();

async function fetchData() {
  try {
    await axios.get(`${process.env.BACKEND_URL}/api/blogs/syncBlogs`);
    console.log('Cron job executed at:', new Date().toLocaleString());

  } catch (error) {
    console.error("Error fetching mdx files data:", error);
  }
}

// run every 2 hours
cron.schedule('0 */2 * * *', async () => {
  await fetchData();
});

// initial run
 fetchData();
