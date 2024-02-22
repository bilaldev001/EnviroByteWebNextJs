// pages/blog/one.js
import { getPostMeta } from '../../middleware/post';
import { getPostContent } from '../../middleware/post';
import grayMatter from 'gray-matter'; // Add this import

const BlogPost = ({ content, frontmatter }) => {
  return (
    <div>
      <h1 key={frontmatter.id}>{frontmatter.title}</h1>
      <p>Date: {frontmatter.date}</p>
      <p>Author: {frontmatter.author}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export async function getStaticProps() {
  const files = await getPostMeta();

  if (!files || files.length === 0) {
    return {
      notFound: true,
    };
  }

  const fileName = files[0].path; // Assuming you want the first file
  const content = await getPostContent(fileName);

  if (!content) {
    return {
      notFound: true,
    };
  }

  // Parse front matter and content using gray-matter
  const { data: frontmatter } = grayMatter(content);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}

export default BlogPost;
