import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import trimString from '@/lib/utils/trimString';

let mockLatestPosts = [
  {
    id: 1,
    title: 'My journey learning TypeScript',
    description:
      'I started learning TypeScript in May 2023 and it has been an incredibly rewarding experience. It has helped me understand the power of static typing and how it can prevent many common bugs that are common in JavaScript.',
    topic: 'Web Development',
    thread: 'Learning TypeScript',
  },
  {
    id: 2,
    title: 'Why I prefer using React over Angular',
    description:
      'I have been working with both React and Angular for several years and I have found that React has a much cleaner and more intuitive architecture. It also has a larger and more active community which makes it easier to find help and resources when you are learning or working on a project.',
    topic: 'Web Development',
    thread: 'React vs Angular',
  },
  {
    id: 3,
    title: 'The benefits of using Next.js for building web applications',
    description:
      'Next.js has been a game-changer for me when it comes to building web applications. It has a great developer experience and makes it easy to build performant and scalable applications. It also has a great ecosystem of plugins and libraries that make it easy to add features to your application.',
    topic: 'Web Development',
    thread: 'Next.js',
  },
  {
    id: 4,
    title: 'My thoughts on using Tailwind CSS for styling',
    description:
      'Tailwind CSS is a great tool for styling web applications. It is very flexible and allows you to easily create custom designs and styles for your application. It also has a great developer experience and makes it easy to add styles to your components without having to write a lot of CSS.',
    topic: 'UI/UX',
    thread: 'Tailwind CSS',
  },
  {
    id: 5,
    title: 'Why I prefer using PostgreSQL over MySQL',
    description:
      'I have been working with both PostgreSQL and MySQL for several years and I have found that PostgreSQL is a much more powerful and flexible database than MySQL. It has a great query language and a great set of features that make it easy to work with and build complex applications.',
    topic: 'Databases',
    thread: 'PostgreSQL vs MySQL',
  },
  {
    id: 6,
    title: 'The importance of code reviews in improving code quality',
    description:
      'Code reviews are a great way to improve the quality of your code and catch bugs and errors before they go into production. They also help to make sure that your code is clean and easy to understand and maintain.Code reviews are a great way to improve the quality of your code and catch bugs and errors before they go into production. They also help to make sure that your code is clean and easy to understand and maintain.Code reviews are a great way to improve the quality of your code and catch bugs and errors before they go into production. They also help to make sure that your code is clean and easy to understand and maintain.',
    topic: 'Software Development',
    thread: 'Code Reviews',
  },
];

export default function Home() {
  return (
    <main className="pt-10 flex flex-col items-center justify-center gap-10 w-full ">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]  md:block bg-gradient-to-r from-purple-500 to-primary inline-block text-transparent bg-clip-text">
        Latest posts
      </h1>
      <div className="flex flex-wrap justify-center gap-2 align-center w-full">
        {mockLatestPosts.map((post, index) => (
          <div key={post.id} className="w-[430px]">
            <Link href={`/posts/${post.id}`} key={post.id}>
              <Card className="relative flex flex-col aspect-square items-center  overflow-hidden p-4  transition-all hover:border-primary">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    <Breadcrumb className="pt-1">
                      <BreadcrumbList>
                        <BreadcrumbItem>{post.topic}</BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbPage>{post.thread}</BreadcrumbPage>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-wrap ">
                    {trimString(post.description, 280)}
                  </p>
                </CardContent>
                {/* <span className="absolute bottom-4 opacity-10">
                  {index + 1}
                </span> */}
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
