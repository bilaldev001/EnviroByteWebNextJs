import { getPostContent } from "../../../../middleware/post";
import prisma from "../../../../prisma/db";
import grayMatter from "gray-matter";


export default async function GET(req, res) {
  try {
    const githubResponse = await fetch(
      'https://api.github.com/repos/bilaldev001/mdxblogs/git/trees/main?recursive=1',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
    if (!githubResponse.ok) return res.status(500).json({ message: 'GitHub API Error' });
    const githubData = await githubResponse.json();
    const fileArray = githubData.tree
      .map(obj => ({ path: obj.path }))
      .filter(file => file.path.endsWith('.mdx'));
    const existingFilePaths = await prisma.mdxFile.findMany({
      select: { filePath: true },
    });
    const newFileArray = fileArray.filter(
      file => !existingFilePaths.some(existingFile => existingFile.filePath === file.path)
    );
    const deletedFiles = existingFilePaths.filter(
      existingFile => !fileArray.some(file => file.path === existingFile.filePath)
    );
    if (newFileArray.length > 0) {
      await Promise.all(
        newFileArray.map(async file => {
          const content = await getPostContent(file.path);
          const { data: frontmatter } = grayMatter(content);
          await prisma.mdxFile.create({
            data: {
              filePath: file.path,
              title: frontmatter.title,
              tags: frontmatter.tags,
              categories: frontmatter.categories,
              image: frontmatter.image,
              author: frontmatter.author,
            },
          });
        })
      );
      return res.status(201).json({ message: 'Files added successfully' });
    }

    if (deletedFiles.length > 0) {
      await Promise.all(
        deletedFiles.map(async file => {
            await prisma.mdxFile.delete({
            where: {
              filePath: file.filePath,
            },
          });
        })
      );
    }

    res.json({ message: `Last Synced: ${new Date().toLocaleString()}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  }
}