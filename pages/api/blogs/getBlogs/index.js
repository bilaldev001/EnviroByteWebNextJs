import prisma from "../../../../prisma/db";


export default async function GET(req, res) {
  try {
    let newFilesPath = await prisma.mdxFile.findMany({})
    res.json({ newFilesPath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
