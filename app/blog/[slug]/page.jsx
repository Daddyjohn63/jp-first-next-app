import { getPost, getSlugs } from '@/lib/blog';

export default async function SinglePostPage({ params: { slug } }) {
  // console.log('[SinglePage] Props:', { params: { slug } });

  const singlePost = await getPost(slug);
  return (
    <>
      <h1 className="text-white">{singlePost.title}</h1>
      <h4 className="text-white">{singlePost.subtitle}</h4>
      <h1 className="text-white">{singlePost.body}</h1>
      <p className="text-white">{singlePost.date}</p>
    </>
  );
}
