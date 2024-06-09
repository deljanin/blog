import React from 'react';
import Image from 'next/image';
import {
  Home,
  LineChart,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users2,
  Settings,
} from 'lucide-react';

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

export default function Layout() {
  return (
    <>
      <aside className="group/side fixed inset-y-0 left-0 z-15 w-14 hover:w-56 flex flex-col border-r bg-background transition-all duration-400 sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="relative group/link flex items-center justify-center group-hover/side:justify-start w-full text-lg font-semibold  md:text-base">
            <div className="flex items-center justify-center rounded-full h-9 w-9 bg-primary">
              <Package2 className="h-4 w-4 text-lg font-semibold text-primary-foreground transition-all group-hover/link:scale-110" />
            </div>
            <span className="absolute -left-4 group-hover/side:left-10 opacity-0 group-hover/side:opacity-100 trasition-all duration-150 ml-2 group-hover/side:delay-150">
              Vanu&apos;s Blog
            </span>
          </Link>
          <Link
            href="#"
            className="relative group/link flex items-center justify-center group-hover/side:justify-start w-full text-lg font-semibold  md:text-base">
            <div className="flex items-center justify-center rounded-full h-9 w-9 transition-colors text-muted-foreground group-hover/link:text-foreground md:h-8 md:w-8">
              <Home className="h-4 w-4 transition-all group-hover/link:scale-110" />
            </div>
            <span className="absolute -left-4 group-hover/side:left-10 text-muted-foreground group-hover/link:text-foreground opacity-0 group-hover/side:opacity-100 trasition-all duration-150 ml-2 group-hover/side:delay-150">
              Home
            </span>
          </Link>
          <Link
            href="#"
            className="relative group/link flex items-center justify-center group-hover/side:justify-start w-full text-lg font-semibold  md:text-base">
            <div className="flex items-center justify-center rounded-full h-9 w-9 transition-colors text-muted-foreground group-hover/link:text-foreground md:h-8 md:w-8">
              <ShoppingCart className="h-4 w-4 transition-all group-hover/link:scale-110" />
            </div>
            <span className="absolute -left-4 group-hover/side:left-10 text-muted-foreground group-hover/link:text-foreground opacity-0 group-hover/side:opacity-100 trasition-all duration-150 ml-2 group-hover/side:delay-150">
              Orders
            </span>
          </Link>
          <Link
            href="#"
            className="relative group/link flex items-center justify-center group-hover/side:justify-start w-full text-lg font-semibold  md:text-base">
            <div className="flex items-center justify-center rounded-full h-9 w-9 transition-colors text-muted-foreground group-hover/link:text-foreground md:h-8 md:w-8">
              <Package className="h-4 w-4 transition-all group-hover/link:scale-110" />
            </div>
            <span className="absolute -left-4 group-hover/side:left-10 text-muted-foreground group-hover/link:text-foreground opacity-0 group-hover/side:opacity-100 trasition-all duration-150 ml-2 group-hover/side:delay-150">
              Products
            </span>
          </Link>
          <Link
            href="#"
            className="relative group/link flex items-center justify-center group-hover/side:justify-start w-full text-lg font-semibold  md:text-base">
            <div className="flex items-center justify-center rounded-full h-9 w-9 transition-colors text-muted-foreground group-hover/link:text-foreground md:h-8 md:w-8">
              <Users2 className="h-4 w-4 transition-all group-hover/link:scale-110" />
            </div>
            <span className="absolute -left-4 group-hover/side:left-10 text-muted-foreground group-hover/link:text-foreground opacity-0 group-hover/side:opacity-100 trasition-all duration-150 ml-2 group-hover/side:delay-150">
              Customers
            </span>
          </Link>
          <Link
            href="#"
            className="relative group/link flex items-center justify-center group-hover/side:justify-start w-full text-lg font-semibold  md:text-base">
            <div className="flex items-center justify-center rounded-full h-9 w-9 transition-colors text-muted-foreground group-hover/link:text-foreground md:h-8 md:w-8">
              <LineChart className="h-4 w-4 transition-all group-hover/link:scale-110" />
            </div>
            <span className="absolute -left-4 group-hover/side:left-10 text-muted-foreground group-hover/link:text-foreground opacity-0 group-hover/side:opacity-100 trasition-all duration-150 ml-2 group-hover/side:delay-150">
              Analytics
            </span>
          </Link>
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
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Orders</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Recent Orders</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
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
