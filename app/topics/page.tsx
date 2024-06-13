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

let mockPosts = [
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
    name: 'Web Development',
    description: 'Topic for web development discussions',
  },
  {
    id: 6,
    name: 'Gaming',
    description: 'Topic for gaming discussions',
  },
  {
    id: 7,
    name: 'Music',
    description: 'Topic for music discussions',
  },
  {
    id: 8,
    name: 'Food',
    description: 'Topic for food discussions',
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
          <CollapsibleContent className="flex justify-center flex-wrap gap-4 px-2">
            {mockPosts.map((post) => (
              <Link
                href={`/posts/${post.id}`}
                key={post.id}
                className="sm:w-64 w-full">
                <Card className="sm:w-64 w-full h-60 hover:scale-105 transition-all hover:border-primary">
                  <CardHeader>
                    <CardTitle>{post.name}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </>
  );
}
