import React from 'react';
interface Params {
  slug: string;
}
export default function Posts({ params }: { params: Params }) {
  return <div>Page {params.slug}</div>;
}
