'use client';
import { useState } from 'react';
import { ChevronsUpDown, ChevronsDownUp, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export interface Thread {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  slug: string;
  topicId: number;
}

export interface Topic {
  id: number;
  title: string;
  createdAt: Date;
  icon: string;
  slug: string;
  threads: Thread[];
}

export default function CollapsibleTopic({ topic }: { topic: Topic }) {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Collapsible
      open={isOpen}
      key={topic.id}
      onOpenChange={handleOpenChange}
      id={topic.slug}
      className="xl:w-3/4 p-4 space-y-2 xl:mx-auto">
      <div className="flex items-center justify-between space-x-4 px-4">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex justify-between mb-2">
            <h4 className="text-md font-semibold">{topic.title}</h4>
            {isOpen ? (
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
        {topic.threads.map((thread) => (
          <Link
            href={`/topics/${thread.slug}`}
            key={thread.id}
            className="w-full px-8 sm:mx-0">
            <div className="rounded-md border px-4 py-3 min-h-40 sm:min-h-24 hover:border-primary hover:scale-105 transition-all">
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {thread.title}
              </h3>
              <p>{thread.description}</p>
            </div>
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
