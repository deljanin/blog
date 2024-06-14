'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays } from 'lucide-react';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Link from 'next/link';

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
  let mockComments = [
    {
      id: 1,
      name: 'John Doe',
      content:
        'This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment',
      img: 'https://github.com/vercel.png',
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
    },
    {
      id: 2,
      name: 'Jane Doe',
      content:
        'This is another comment.This is another comment.This is another comment.This is another comment.This is another comment.This is another comment.This is another comment.This is another comment',
      img: 'https://github.com/vercel.png',
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
    },
    {
      id: 3,
      name: 'John Doe',
      content:
        'This is a third comment.This is a third comment.This is a third comment.This is a third comment.This is a third comment.This is a third comment.This is a third comment.This is a third comment',
      img: 'https://github.com/vercel.png',
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
    },
    {
      id: 4,
      name: 'Jane Doe',
      content:
        'This is a fourth comment.This is a fourth comment.This is a fourth comment.This is a fourth comment.This is a fourth comment.This is a fourth comment.This is a fourth comment.This is a fourth comment',
      img: 'https://github.com/vercel.png',
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
    },
    {
      id: 5,
      name: 'John Doe',
      content:
        'This is a fifth comment.This is a fifth comment.This is a fifth comment.This is a fifth comment.This is a fifth comment.This is a fifth comment.This is a fifth comment.This is a fifth comment',
      img: 'https://github.com/vercel.png',
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
    },
  ];

  let mockSimilarPosts = [
    {
      id: 1,
      title: 'My journey learning TypeScript',
      description:
        'Learning TypeScript has been a great experience so far. It has helped me write cleaner and more maintainable code.',
    },
    {
      id: 2,
      title: 'Why I prefer using React over Angular',
      description:
        'I have used both React and Angular in the past, and I personally prefer React for its simplicity and flexibility.',
    },
    {
      id: 3,
      title: 'The benefits of using Next.js for building web applications',
      description:
        'Next.js is a great framework for building web applications. It offers features like server-side rendering, static site generation, and API routes, making it easy to build performant and scalable web applications.',
    },
    {
      id: 4,
      title: 'My thoughts on using Tailwind CSS for styling',
      description:
        'I have been using Tailwind CSS for a while now, and I really enjoy how easy it is to style components. It has greatly reduced the time and effort required for styling in my projects.',
    },
    {
      id: 5,
      title: 'Why I prefer using PostgreSQL over MySQL',
      description:
        'I have used both PostgreSQL and MySQL in the past, and I personally prefer PostgreSQL for its reliability, scalability, and advanced features.',
    },
    {
      id: 6,
      title: 'The importance of code reviews in improving code quality',
      description:
        'Code reviews are an essential part of a software development process. They help catch bugs, improve code quality, and promote collaboration among team members.',
    },
  ];

  const FormSchema = z.object({
    comment: z
      .string()
      .min(10, {
        message: 'Comment must be at least 10 characters.',
      })
      .max(180, {
        message: 'Comment must not be longer than 180 characters.',
      }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // TODO: add comment to database
  }
  return (
    <>
      <article className="p-5 pt-10 lg:mx-auto max-w-2xl">
        <Markdown
          className="prose dark:prose-invert "
          remarkPlugins={[remarkGfm]}>
          {mockPost}
        </Markdown>
        <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight  ">
          Similar posts
        </h2>
        <div className="flex flex-col gap-4 mt-5 w-full">
          {mockSimilarPosts.map((post) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              className="w-full p-2 flex items-center justify-between rounded-lg transition-all border border-transparent hover:border hover:border-primary">
              <div className="flex space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{post.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight  ">
          Comments
        </h2>
        <div className="flex flex-col gap-4 mt-5 w-full">
          {mockComments.map((comment) => (
            <div key={comment.id} className="w-full border rounded-lg p-5">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>{comment.name}</AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{comment.name}</h4>
                  <div className="flex items-center pb-3 pt-1">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      {comment.date.toDateString()}
                    </span>
                  </div>
                  <p className="break-words text-sm text-wrap">
                    {comment.content}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <Separator />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comment</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write a comment..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      You can <span>@mention</span> other users and
                      organizations.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Post comment</Button>
            </form>
          </Form>
        </div>
      </article>
    </>
  );
}
