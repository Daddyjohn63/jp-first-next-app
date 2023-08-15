import { getPosts } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getPosts();
  console.log('[BlogPage] posts:', posts);
  return (
    <>
      <ul className="flex flex-row flex-wrap gap-3">
        {posts.map(post => (
          <li
            key={post.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/posts/${post.slug}`}>
              <Image
                src={post.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-orbitron font-semibold py-1 text-center text-black">
                {post.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
