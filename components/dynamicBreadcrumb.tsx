'use client';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DynamicBreadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  function createBreadcrumbs() {
    return pathNames.map((path, index) => {
      if (index !== pathNames.length - 1) {
        return (
          <>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild>
                <Link href={`/${path}`}>{path}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        );
      } else {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbPage>
              <Link href={`/${path}`}>{path}</Link>
            </BreadcrumbPage>
          </BreadcrumbItem>
        );
      }
    });
  }
  return (
    <Breadcrumb className=" md:flex">
      <BreadcrumbList>{createBreadcrumbs()}</BreadcrumbList>
    </Breadcrumb>
  );
}
