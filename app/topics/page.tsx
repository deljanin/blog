export const dynamic = 'force-dynamic';
import CollapsibleTopic from '@/components/collapsible-topic';
import { db } from '@/lib/drizzle/drizzleClient';

export default async function Topics() {
  const topicsData = await db.query.topic.findMany();
  const threadsData = await db.query.thread.findMany();

  const topics = topicsData.map((topic) => {
    return {
      ...topic,
      threads: threadsData.filter((th) => th.topicId === topic.id),
    };
  });

  return (
    <>
      <h1 className="pt-10 text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]  md:block">
        Topics
      </h1>
      {topics.map((topic) => (
        <CollapsibleTopic topic={topic} key={topic.id} />
      ))}
    </>
  );
}
