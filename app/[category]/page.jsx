import { getCategories, getCategoryTitle } from '@/lib/blog';

export default async function CategoryPage({ params: { category } }) {
  // console.log('[CategoryPage] props:', { params: { category } });

  const getTitle = await getCategoryTitle(category);
  console.log('[cat title]', getTitle);

  const categoryPage = await getCategories(category);
  // console.log(categoryPage);
  return (
    <>
      <h1>{getTitle}</h1>
      {categoryPage.map(post => (
        <h4 key={post.slug} className="text-white">
          {post.title}
        </h4>
      ))}
    </>
  );
}

// export default async function categoryTitle({ params: { category } }) {
//   console.log('[CategoryPage] props:', { params: { category } });
// }
