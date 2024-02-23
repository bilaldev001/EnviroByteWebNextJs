import prisma from "../prisma/db";

export async function getPostContent(filePath) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/bilaldev001/mdxblogs/main/${filePath}`);
      
      if (!res.ok) {
        console.error(`Failed to fetch content for ${filePath}`);
        return null;
      }
  
      const content = await res.text();
      return content;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  