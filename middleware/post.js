import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPostMeta() {
  try {
    const res = await fetch('https://api.github.com/repos/bilaldev001/mdxblogs/git/trees/main?recursive=1', {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    if (!res.ok) return undefined;

    const data = await res.json();
    const fileArray = data.tree
      .map(obj => ({ path: obj.path }))
      .filter(file => file.path.endsWith('.mdx'));

    // Get existing file paths from the database
    const existingFilePaths = await prisma.mdxFile.findMany({ 
      select: { filePath: true },
    });

    // Filter out existing file paths
    const newFileArray = fileArray.filter(file => !existingFilePaths.some(existingFile => existingFile.filePath === file.path));

    // Save new file paths into the database
    await Promise.all(newFileArray.map(async (file) => {
      await prisma.mdxFile.create({
        data: {
          filePath: file.path,
        },
      });
    }));

    return fileArray;
  } catch (error) {
    console.error(error);
    return null;
  }
}

  

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
  