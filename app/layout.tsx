import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import {
  Home,
  Search,
  Settings,
  Code,
  Waypoints,
  CircleUser,
  Menu,
} from 'lucide-react';
import DynamicBreadcrumb from '@/components/dynamic-breadcrumb';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
import { Separator } from '@/components/ui/separator';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';
import trimString from '@/lib/utils/trimString';
let mockTopics = [
  { id: 1, name: 'Tech', icon: Code, href: '/topics#1' },
  { id: 2, name: 'Game of life', icon: Waypoints, href: '/topics#2' },
];
let mockThreads = [
  { id: 1, title: 'The Future of Web Development', href: '/topics/1' },
  { id: 2, title: 'The best way to learn React', href: '/topics/2' },
  { id: 3, title: 'How to optimize your Next.js app', href: '/topics/3' },
  {
    id: 4,
    title: 'The best CSS frameworks for web development',
    href: '/topics/4',
  },
  { id: 5, title: 'The best book to learn TypeScript', href: '/topics/5' },
  { id: 6, title: 'How to write clean and efficient code', href: '/topics/6' },
  {
    id: 7,
    title: 'The best tools for frontend development',
    href: '/topics/7',
  },
  { id: 8, title: 'How to manage your time effectively', href: '/topics/8' },
  { id: 9, title: 'The best way to learn a new language', href: '/topics/9' },

  {
    id: 31,
    title: 'The best way to work remotely',
    href: '/topics/31',
  },
  {
    id: 32,
    title: 'The best way to optimize your computer',
    href: '/topics/32',
  },
  {
    id: 33,
    title: 'The best way to learn a new skill',
    href: '/topics/33',
  },
  {
    id: 34,
    title: 'The best way to start a business',
    href: '/topics/34',
  },
  {
    id: 35,
    title: 'The best way to manage your finances',
    href: '/topics/35',
  },
  {
    id: 36,
    title: 'The best way to improve your mental health',
    href: '/topics/36',
  },
  {
    id: 37,
    title: 'The best way to learn a new language',
    href: '/topics/37',
  },
  {
    id: 38,
    title: 'The best way to improve your physical health',
    href: '/topics/38',
  },
  {
    id: 39,
    title: 'The best way to learn a new skill',
    href: '/topics/39',
  },
];

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "pd's blog",
  description: 'Blog about tech, coding, learning, business and life.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed inset-0 grid min-h-screen w-full md:grid-cols-[280px_1fr] ">
            <div className=" hidden border-r bg-muted/40 md:block">
              <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold">
                    <Home className="h-6 w-6" />
                    <span className="">Da blog</span>
                  </Link>
                </div>
                <div className="flex-1">
                  <nav className="flex flex-col px-2 gap-3 text-sm font-medium lg:px-4">
                    {mockTopics.map((topic) => (
                      <>
                        <div>
                          <Link
                            key={topic.id}
                            href={topic.href}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                            <topic.icon className="h-4 w-4" />
                            {topic.name}
                          </Link>
                          <Separator />

                          <ScrollArea className="ml-2 py-1 h-64 w-full rounded-lg ">
                            {mockThreads.map((thread) => (
                              <>
                                <Link
                                  key={thread.id}
                                  href={thread.href}
                                  className="flex ml-4 py-2 text-muted-foreground transition-all hover:text-primary">
                                  <span className="">
                                    {trimString(thread.title, 30)}
                                  </span>
                                </Link>
                              </>
                            ))}
                          </ScrollArea>
                        </div>
                      </>
                    ))}
                  </nav>
                </div>
                <div className="mt-auto p-4">
                  <Link
                    href="#"
                    className="flex items-center gap-2 px-2 w-full text-lg font-semibold text-muted-foreground md:text-base">
                    <Settings className="h-5 w-5 transition-all " />
                    <span className="">Settings</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-y-auto pb-16">
              <header className="flex h-14 flex-shrink-0 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="shrink-0 md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="flex flex-col">
                    <div className="flex flex-col gap-4 border-b p-4 pt-0 lg:h-[60px] lg:px-6">
                      <Link
                        href="/"
                        className="flex items-center gap-2 font-semibold">
                        <Home className="h-6 w-6" />
                        <span className="">Da blog</span>
                      </Link>
                      <Link className="font-semibold" href="/topics">
                        Topics
                      </Link>
                      <Link className="font-semibold" href="/about">
                        About
                      </Link>
                    </div>
                    <nav className="grid gap-2 text-lg font-medium">
                      {mockTopics.map((topic) => (
                        <>
                          <div>
                            <Link
                              key={topic.id}
                              href={topic.href}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                              <topic.icon className="h-4 w-4" />
                              {topic.name}
                            </Link>
                            <Separator />

                            <ScrollArea className="ml-2 py-1 h-64 w-full rounded-lg ">
                              {mockThreads.map((thread) => (
                                <>
                                  <Link
                                    key={thread.id}
                                    href={thread.href}
                                    className="flex ml-4 py-2 text-muted-foreground transition-all hover:text-primary">
                                    <span className="">
                                      {trimString(thread.title, 30)}
                                    </span>
                                  </Link>
                                </>
                              ))}
                            </ScrollArea>
                          </div>
                        </>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
                <DynamicBreadcrumb />
                <div className="flex-1 flex items-center justify-end gap-4">
                  <Link className="hidden md:block" href="/">
                    Home
                  </Link>
                  <Link className="hidden md:block" href="/topics">
                    Topics
                  </Link>
                  <Link className="hidden md:block" href="/about">
                    About
                  </Link>
                </div>
                {/* Potentially add search  */}
                {/* <div className="w-full flex-1">
                  
                  <form>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                      />
                    </div>
                  </form> 
                </div>*/}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full">
                      <CircleUser className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>

                    {/* <DropdownMenuSeparator /> */}
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <ThemeSwitcher />
              </header>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
