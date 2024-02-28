import prisma from "../../../../prisma/db";

export default async function GET(req, res) {
  try {
    const { page = 1, perPage = 10 } = req.query;
    const pageNumber = parseInt(page);
    const itemsPerPage = parseInt(perPage);

    const skip = (pageNumber - 1) * itemsPerPage;

    const totalBlogsCount = await prisma.mdxFile.count();
    const totalPages = Math.ceil(totalBlogsCount / itemsPerPage);

    const blogs = await prisma.mdxFile.findMany({
      skip,
      take: itemsPerPage,
    });

    res.json({ blogs, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
