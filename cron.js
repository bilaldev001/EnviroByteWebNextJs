const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();
console.log(process.env.BACKEND_URL);

async function fetchData() {
  try {
    await axios.get(`${process.env.BACKEND_URL}api/blogs/syncBlogs`); // Use axios.get for GET requests
  } catch (error) {
    console.error("Error fetching mdx files data:", error);
  }
}

// run every 2 hours
cron.schedule('0 */2 * * *', async () => {
  console.log('Cron job executed at:', new Date().toLocaleString());
  await fetchData();
});
