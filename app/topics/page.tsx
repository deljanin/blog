'use client';

import * as React from 'react';
import { ChevronsUpDown, ChevronsDownUp, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

let mockTopics = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Topic for web development discussions',
  },
  {
    id: 2,
    name: 'Gaming',
    description: 'Topic for gaming discussions',
  },
  {
    id: 3,
    name: 'Music',
    description: 'Topic for music discussions',
  },
  {
    id: 4,
    name: 'Food',
    description: 'Topic for food discussions',
  },
  {
    id: 5,
    name: 'Travel',
    description: 'Topic for travel discussions',
  },
];

let mockThreads = [
  {
    id: 1,
    name: 'Learning TypeScript',
    description:
      'Discussing the benefits and challenges of learning TypeScript, including its type system, static type checking, and migrating existing JavaScript projects.',
  },
  {
    id: 2,
    name: 'React vs Angular',
    description:
      'Comparing and contrasting React and Angular, including their component models, virtual DOM, frameworks, and ecosystems.',
  },
  {
    id: 3,
    name: 'Next.js',
    description:
      'Discussing the features and benefits of Next.js, including its server-side rendering, automatic code splitting, and static site generation.',
  },
  {
    id: 4,
    name: 'Tailwind CSS',
    description:
      'Exploring Tailwind CSS, a utility-first CSS framework that provides a wide range of pre-designed utility classes for building responsive and consistent user interfaces.',
  },
  {
    id: 5,
    name: 'PostgreSQL vs MySQL',
    description:
      'Comparing and contrasting PostgreSQL and MySQL, including their architectures, features, performance, and usage cases.',
  },
];

export default function Topics() {
  const [isOpen, setIsOpen] = React.useState(
    new Array(mockTopics.length).fill(true)
  );
  const handleOpenChange = (index: number, open: boolean) => {
    setIsOpen((prevIsOpen) =>
      prevIsOpen.map((_isOpen, i) => (i === index ? open : _isOpen))
    );
  };

  return (
    <>
      <h1 className="pt-10 text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]  md:block">
        Topics
      </h1>
      {mockTopics.map((topic) => (
        <Collapsible
          key={topic.id}
          open={isOpen[topic.id]}
          onOpenChange={(open) => handleOpenChange(topic.id, open)}
          id={topic.id.toString()}
          className="xl:w-3/4 p-4 space-y-2 xl:mx-auto">
          <div className="flex items-center justify-between space-x-4 px-4">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="w-full flex justify-between mb-2">
                <h4 className="text-md font-semibold">{topic.name}</h4>
                {isOpen[topic.id] ? (
                  <ChevronsDownUp className="h-4 w-4" />
                ) : (
                  <ChevronsUpDown className="h-4 w-4" />
                )}
                {/* <ChevronsUpDown className="h-4 w-4" /> */}
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex justify-center flex-col gap-3">
            {mockThreads.map((thread) => (
              <Link
                href={`/topics/${thread.id}`}
                key={thread.id}
                className="w-full px-8 sm:mx-0">
                <div className="rounded-md border px-4 py-3 min-h-40 sm:min-h-24 hover:border-primary hover:scale-105 transition-all">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {thread.name}
                  </h3>
                  <p>{thread.description}</p>
                </div>
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </>
  );
}
