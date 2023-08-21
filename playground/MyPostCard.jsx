import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
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
  );
};

export default PostCard;
