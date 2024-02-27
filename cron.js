const cron = require('node-cron');
require('dotenv').config();
async function fetchData() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}api/blogs/getBlogs`);
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error("Error fetching mdx files  data:", error);
  }
}
cron.schedule('0 */12 * * *', () => {
  console.log('Cron job executed at:', new Date().toLocaleString());
  fetchData();
});