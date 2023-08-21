import PostCard from '@/components/common/PostCard';
import { getPosts } from '@/lib/blog';
// import Image from 'next/image';
// import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getPosts();
  // console.log('[BlogPage] posts:', posts);
  return (
    <div className="bg-gray-900 py-24 sm:py-15 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/*heading div start  */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        {/*heading div end  */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
