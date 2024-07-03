import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { db } from '@/lib/drizzle/drizzleClient';
import { comment, post, similarPost, user } from '@/lib/drizzle/schema';
import { desc, eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import Comments from '@/components/comments';
import rehypeSlug from 'rehype-slug';

interface Params {
  slug: string;
}
export default async function Posts({ params }: { params: Params }) {
  let noSimilarPosts = false;
  const postData = await db
    .select()
    .from(post)
    .where(eq(post.slug, params.slug));
  if (postData.length === 0) return notFound();
  const markdownContent = postData[0].content;
  const similarPostsData = await db
    .select({
      postId: similarPost.postId,
      similarPostId: similarPost.similarPostId,
      similarity: similarPost.similarity,
      title: post.title,
      description: post.description,
      slug: post.slug,
    })
    .from(similarPost)
    .leftJoin(post, eq(similarPost.similarPostId, post.id))
    .where(eq(similarPost.postId, postData[0].id))
    .orderBy(desc(similarPost.similarity));
  if (postData.length === 0) noSimilarPosts = true;

  // const commentsData = await db
  //   .select({
  //     id: comment.id,
  //     content: comment.content,
  //     createdAt: comment.createdAt,
  //     likes: comment.likes,
  //     postId: comment.postId,
  //     userId: comment.userId,
  //     user: {
  //       name: user.name,
  //       avatarUrl: user.avatarUrl,
  //     },
  //   })
  //   .from(comment)
  //   .innerJoin(user, eq(comment.userId, user.id))
  //   .where(eq(comment.postId, postData[0].id));

  function Toc() {
    const regex = /#{1,6} .+/g;
    const headings = markdownContent.match(regex);

    // To handle duplicate headings, use a map to count occurrences
    const headingCounts = new Map();

    return (
      <ul className="sticky top-48 overflow-y-auto">
        {headings?.map((heading) => {
          const level = heading.match(/^#+/)?.[0].length; // Extract heading level
          const text = heading.replace(/^#{1,6} /, ''); // Remove hash and space
          const slug = text
            .toLowerCase()
            .replace(/[.:? ]+/g, '-') // Replace certain characters with '-'
            .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, ''); // Remove special characters

          // Update the count for this heading
          const count = headingCounts.get(text) || 0;
          headingCounts.set(text, count + 1);
          // Create a unique key by appending the count (if greater than 1)
          const uniqueSlug = count > 0 ? `${slug}-${count}` : slug;
          // Determine the indentation based on heading level
          const indent = level !== undefined ? level * 4 : 0; // Assuming 4px per heading level
          return (
            <li
              key={uniqueSlug}
              className={`pl-${indent} py-1 hover:text-gray-1000 leading-[1.6] opacity-70 hover:opacity-100 hover:text-primary transition-all`}>
              <a href={`#${uniqueSlug}`}>{text}</a>
            </li>
          );
        })}
      </ul>
    );
  }

  function SimilarPosts() {
    if (noSimilarPosts === false) {
      return (
        <div className="flex flex-col gap-4 mt-5 w-full max-w-2xl">
          {similarPostsData.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.similarPostId}
              className="w-full p-2 flex items-center justify-between rounded-lg transition-all border border-transparent hover:border hover:border-primary">
              <div className="flex space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{post.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <span className="text-sm opacity-30">
                    Similarity: {(100 * post.similarity).toFixed(2)}%
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    } else
      return (
        <h4 className="text-sm font-semibold">
          No similar posts yet. Stay tuned.
        </h4>
      );
  }

  return (
    <>
      <article className="p-5 pt-10 lg:mx-auto animate-fade-in ">
        <div className="xl:flex ">
          {/* Markdown Content */}

          <Markdown
            className="prose dark:prose-invert "
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}>
            {markdownContent}
          </Markdown>

          {/* Table of Contents */}
          <div className="w-[280px] ml-6 hidden xl:block sticky top-16">
            <Toc />
          </div>
        </div>

        {/* Similar Posts Section */}
        <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight max-w-2xl">
          Similar posts
        </h2>
        <SimilarPosts />

        {/* Comments Section */}
        {/* Uncomment this section when implementing Comments component */}
        {/* <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
            Comments
          </h2>
          <Comments /> */}
      </article>
    </>
  );
}
