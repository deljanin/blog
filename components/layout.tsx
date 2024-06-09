import React from 'react';
import Image from 'next/image';
import { Home, Search, Settings, Code, Waypoints } from 'lucide-react';

import { ScrollArea } from '@/components/ui/scroll-area';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Separator } from './ui/separator';
import DynamicBreadcrumb from './dynamicBreadcrumb';

let mockTopics = [
  { id: 1, name: 'Tech', icon: Code, href: '#' },
  { id: 2, name: 'Game of life', icon: Waypoints, href: '#' },
];
// Make like 50 of these
let mockPosts = [
  { id: 1, title: 'Post 1Some cool text in the title man', href: '#' },
  { id: 2, title: 'Post 2Some cool text in the title man', href: '#' },
  { id: 3, title: 'Post 3Some cool text in the title man', href: '#' },
  { id: 4, title: 'Post 4Some cool text in the title man', href: '#' },
  { id: 5, title: 'Post 5Some cool text in the title man', href: '#' },
  { id: 6, title: 'Post 6Some cool text in the title man', href: '#' },
  { id: 7, title: 'Post 7Some cool text in the title man', href: '#' },
  { id: 8, title: 'Post 8Some cool text in the title man', href: '#' },
  { id: 9, title: 'Post 9Some cool text in the title man', href: '#' },

  { id: 31, title: 'Post 31Some cool text in the title man', href: '#' },
  { id: 32, title: 'Post 32Some cool text in the title man', href: '#' },
  { id: 33, title: 'Post 33Some cool text in the title man', href: '#' },
  { id: 34, title: 'Post 34Some cool text in the title man', href: '#' },
  { id: 35, title: 'Post 35Some cool text in the title man', href: '#' },
  { id: 36, title: 'Post 36Some cool text in the title man', href: '#' },
  { id: 37, title: 'Post 37Some cool text in the title man', href: '#' },
  { id: 38, title: 'Post 38Some cool text in the title man', href: '#' },
  { id: 39, title: 'Post 39Some cool text in the title man', href: '#' },
];

export default function Layout() {
  return (
    <>
      <aside className="group/side fixed inset-y-0 left-0 z-15 w-14 hover:w-56 flex flex-col border-r bg-background transition-all duration-400 sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/"
            className="relative group/link flex items-center justify-center group-hover/side:justify-start w-full text-lg font-semibold  md:text-base">
            <div className="flex items-center justify-center rounded-full h-9 w-9 bg-primary">
              <Home className="h-4 w-4 text-lg font-semibold text-primary-foreground transition-all group-hover/link:scale-110" />
            </div>
            <span className="absolute -left-4 group-hover/side:left-10 opacity-0 group-hover/side:opacity-100 trasition-all duration-150 ml-2 group-hover/side:delay-150">
              Vanu&apos;s Blog
            </span>
          </Link>

          {mockTopics.map((topic) => (
            <>
              <Link
                key={topic.id}
                href={topic.href}
                className="relative group/link flex items-center justify-center group-hover/side:justify-start w-full text-lg font-semibold  md:text-base">
                <div className="flex items-center justify-center rounded-full h-9 w-9 transition-colors text-muted-foreground group-hover/link:text-foreground md:h-8 md:w-8">
                  <topic.icon className="h-4 w-4 transition-all group-hover/link:scale-110" />
                </div>
                <span className="absolute -left-4 group-hover/side:left-10 text-muted-foreground group-hover/link:text-foreground opacity-0 group-hover/side:opacity-100 trasition-all duration-150 ml-2 group-hover/side:delay-150">
                  {topic.name}
                </span>
              </Link>
              <ScrollArea className="hidden group-hover/side:block h-64 w-full">
                {mockPosts.map((post) => (
                  <>
                    <Link
                      key={post.id}
                      href={post.href}
                      className="text-muted-foreground flex ml-6 mb-3 mr-2">
                      <span className="">{post.title}</span>
                    </Link>
                  </>
                ))}
              </ScrollArea>
              <Separator />
            </>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="relative group/link flex items-center justify-center group-hover/side:justify-start w-full text-lg font-semibold  md:text-base">
            <div className="flex items-center justify-center rounded-full h-9 w-9 transition-colors text-muted-foreground group-hover/link:text-foreground md:h-8 md:w-8">
              <Settings className="h-5 w-5 transition-all group-hover/link:scale-110" />
            </div>
            <span className="absolute -left-4 group-hover/side:left-10 text-muted-foreground group-hover/link:text-foreground opacity-0 group-hover/side:opacity-100 trasition-all duration-150 ml-2 group-hover/side:delay-150">
              Settings
            </span>
          </Link>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-5 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <DynamicBreadcrumb />
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full">
                <Image
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
      </div>
    </>
  );
}
