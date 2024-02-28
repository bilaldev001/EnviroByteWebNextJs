import { getPostContent } from "../../../../middleware/post";
import prisma from "../../../../prisma/db";

export default async function GET(req, res) {
  try {
    const blogId = req.query.id;

    const blogDB = await prisma.mdxFile.findUnique({
      where: {
        id: blogId,
      },
    });
    if (!blogDB) return res.status(404).json({ message: 'Blog Not Found' });
    const fileName = blogDB.filePath;
    const content = await getPostContent(fileName);
    res.json({ content, ...blogDB });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
