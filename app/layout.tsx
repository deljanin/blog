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
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
let mockTopics = [
  { id: 1, name: 'Tech', icon: Code, href: '#' },
  { id: 2, name: 'Game of life', icon: Waypoints, href: '#' },
];
// Make like 50 of these
let mockPosts = [
  { id: 1, title: 'Post 1Some cool text in the title man', href: '/posts/1' },
  { id: 2, title: 'Post 2Some cool text in the title man', href: '/posts/2' },
  { id: 3, title: 'Post 3Some cool text in the title man', href: '/posts/3' },
  { id: 4, title: 'Post 4Some cool text in the title man', href: '/posts/4' },
  { id: 5, title: 'Post 5Some cool text in the title man', href: '/posts/5' },
  { id: 6, title: 'Post 6Some cool text in the title man', href: '/posts/6' },
  { id: 7, title: 'Post 7Some cool text in the title man', href: '/posts/7' },
  { id: 8, title: 'Post 8Some cool text in the title man', href: '/posts/8' },
  { id: 9, title: 'Post 9Some cool text in the title man', href: '/posts/9' },

  {
    id: 31,
    title: 'Post 31Some cool text in the title man',
    href: '/posts/31',
  },
  {
    id: 32,
    title: 'Post 32Some cool text in the title man',
    href: '/posts/32',
  },
  {
    id: 33,
    title: 'Post 33Some cool text in the title man',
    href: '/posts/33',
  },
  {
    id: 34,
    title: 'Post 34Some cool text in the title man',
    href: '/posts/34',
  },
  {
    id: 35,
    title: 'Post 35Some cool text in the title man',
    href: '/posts/35',
  },
  {
    id: 36,
    title: 'Post 36Some cool text in the title man',
    href: '/posts/36',
  },
  {
    id: 37,
    title: 'Post 37Some cool text in the title man',
    href: '/posts/37',
  },
  {
    id: 38,
    title: 'Post 38Some cool text in the title man',
    href: '/posts/38',
  },
  {
    id: 39,
    title: 'Post 39Some cool text in the title man',
    href: '/posts/39',
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
          <div className="fixed inset-0  grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
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
                            {mockPosts.map((post) => (
                              <>
                                <Link
                                  key={post.id}
                                  href={post.href}
                                  className="flex ml-4 py-2 text-muted-foreground transition-all hover:text-primary">
                                  <span className="">{post.title}</span>
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
            <div className="flex flex-col overflow-y-auto">
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
                              {mockPosts.map((post) => (
                                <>
                                  <Link
                                    key={post.id}
                                    href={post.href}
                                    className="flex ml-4 py-2 text-muted-foreground transition-all hover:text-primary">
                                    <span className="">{post.title}</span>
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
