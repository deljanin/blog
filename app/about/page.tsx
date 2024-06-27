import Markdown from 'react-markdown';
let about = `## About Wisdom Petals

Welcome to Wisdom Petals! A space dedicated to tech enthusiasts, avid readers, and aspiring software developers. Here, we document our journey as we explore new technologies, delve into books, and learn about business and life.

## Purpose and Goals

Wisdom Petals was created to share experiences and insights with like-minded individuals who are passionate about continuous learning and personal growth. Our goal is to create a space where we can learn together, inspire each other, and discover something new.

## Topics Covered

- **Technology**: From the basics of programming languages and frameworks to the latest trends in the tech world.
- **Books**: Reviews, summaries, and discussions on self-help, spirituality, and self-improvement.
- **Business**: Insights gathered from various sources on business topics.
- **Life Lessons**: Learning how to play and hopefully beat the game of life.

## About the Project

This blog is built using [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [shadcn-ui](https://ui.shadcn.com/), [Next server-less Postgres DB](https://vercel.com/storage/postgres), [Drizzle](https://orm.drizzle.team/) ORM, [Ollama](https://ollama.com/) and [Clerk](https://clerk.com/).

Post recommendation is integrated using embeddings with llama3. By leveraging Ollama, a list of recommended posts is created, and when crafting a new post, cosine similarity with embeddings generates a list of suggested posts. This idea was inspired by [Simon Willison](https://simonwillison.net/2023/Oct/23/embeddings/).

You can find the source code and setup instructions on the [GitHub repository](https://github.com/deljanin/blog) for this blog.

## Get in Touch

Feel free to reach out via email at [petar@deljanin.dev](mailto:petar@deljanin.dev) or via social media:
- [Instagram](https://www.instagram.com/wisdompetals/)

We are always open to feedback, collaborations, and discussions. Thank you for visiting Wisdom Petals. Let's learn and grow together!


---
`;
export default function About() {
  return (
    <div className="p-5 lg:mx-auto max-w-2xl animate-fade-in">
      <h1 className="pt-5 text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]  md:block">
        About
      </h1>
      <Markdown className="pt-5 prose dark:prose-invert">{about}</Markdown>
    </div>
  );
}
