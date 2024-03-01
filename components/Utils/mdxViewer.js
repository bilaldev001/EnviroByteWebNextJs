import React from 'react';
import ReactMarkdown from 'react-markdown';

// Create your main component where you render MDX content
const MdxViewer = ({ mdxSource }) => {
  return (
    <div>
      <ReactMarkdown
        components={{
          // Render links as anchor tags
          a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />,
          // Render code blocks with proper formatting
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <pre className={className}>
                <code {...props}>{children}</code>
              </pre>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {mdxSource}
      </ReactMarkdown>
    </div>
  );
};

export default MdxViewer;
