import prisma from "../../../../prisma/db";


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
    if(newFileArray.length > 0 ){
            await Promise.all(
            newFileArray.map(async file => {
              await prisma.mdxFile.create({
                data: {
                  filePath: file.path,
                },
              });
            })
          );
       return res.status(201).json({ message: 'file addedd successfully' });

    }
    let newFilesPath;
        try {
            newFilesPath = await prisma.mdxFile.findMany({})
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    res.json({ newFilesPath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
