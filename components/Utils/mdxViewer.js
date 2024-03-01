import React from 'react';

// Create a functional component to render MDX content
const MDXRenderer = ({ content }) => {
  // Split the MDX content into paragraphs
  const paragraphs = content.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div>
      {paragraphs}
    </div>
  );
};

// Create your main component where you render MDX content
const MdxViewer = ({ mdxSource }) => {
  return (
    <div>
      <MDXRenderer content={mdxSource} />
    </div>
  );
};

export default MdxViewer;
