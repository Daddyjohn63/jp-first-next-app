import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <article
      key={post.slug}
      className="flex flex-col items-start justify-between"
    >
      <div className="relative w-full">
        <Image
          src={post.image}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          width="320"
          height="180"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>

      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time className="text-white">{post.date}</time>

          {/* <Link
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </Link> */}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
            <Link href={`/blog/${post.slug}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-5  text-sm leading-6 text-white">{post.excerpt}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          {/* <Image
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  /> */}
          <div className="text-sm leading-6">
            <p className="font-semibold text-white">
              <Link href="">
                <span className="absolute inset-0" />
                {/* {post.author.name} */}
                John Paul
              </Link>
            </p>
            {/* <p className="text-white">{post.author.role}</p> */}
          </div>
        </div>
      </div>
    </article>
  );
};

// <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
//   <Link href={`/posts/${post.slug}`}>
//     <Image
//       src={post.image}
//       alt=""
//       width="320"
//       height="180"
//       className="rounded-t"
//     />
//     <h2 className="font-orbitron font-semibold py-1 text-center text-black">
//       {post.title}
//     </h2>
//   </Link>
// </li>

export default PostCard;
