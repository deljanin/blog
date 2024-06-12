import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Params {
  slug: string;
}
export default function Posts({ params }: { params: Params }) {
  let mockPost = `
# Exploring Next.js and React Markdown

## Introduction

In this blog post, we will explore how to use **Next.js** and **React Markdown** to create dynamic and rich blog posts. Markdown is a lightweight markup language that makes it easy to format text.

## Setting Up Next.js

First, let's set up a new Next.js project. If you haven't already, you can create a new project with the following command:

\`\`\`bash
npx create-next-app my-blog-app
cd my-blog-app
\`\`\`

Next, install the necessary dependencies:

\`\`\`bash
npm install react-markdown
npm install rehype-raw
\`\`\`

## Creating a Markdown Component

We will create a simple React component to render our Markdown content. Here's an example:

\`\`\`javascript
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ~rehypeRaw from 'rehype-raw'~;

const MarkdownRenderer = ({ content }) => {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
\`\`\`

## Adding Images and Videos

You can easily add images and videos to your Markdown content. For example, here's an image and a YouTube video:

![Next.js Logo](https://nextjs.org/static/favicon/favicon-32x32.png)

[![YouTube Video](https://img.youtube.com/vi/pfaSUYaSgRo/0.jpg)](https://www.youtube.com/watch?v=pfaSUYaSgRo)

## Conclusion

Using **Next.js** and **React Markdown** together allows you to create rich, dynamic blog posts with ease. This setup is perfect for developers who want to write content in Markdown and render it in a modern React application.

Happy coding!
`;

  return (
    <>
      {/* Page {params.slug} */}
      <article className="p-5 pt-10 lg:mx-auto">
        <Markdown
          className="prose dark:prose-invert"
          remarkPlugins={[remarkGfm]}>
          {mockPost}
        </Markdown>
      </article>
    </>
  );
}
