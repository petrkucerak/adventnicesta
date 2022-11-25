import Link from "next/link";

export default function Calendar({ posts }) {
  return (
    <div>
      <h4 className="text-2xl font-semibold">Listopad</h4>
      <div>
        {posts.map((post) => {
          const date_tmp = new Date(post.date);
          if (date_tmp.getMonth() === 10) return <Day post={post} />;
        })}
      </div>
      <h4 className="text-2xl font-semibold">Prosinec</h4>
      <div>
        {posts.map((post) => {
          const date_tmp = new Date(post.date);
          if (date_tmp.getMonth() === 11) return <Day post={post} />;
        })}
      </div>
    </div>
  );
}
function Day({ post }) {
  const date = new Date(post.date);
  return (
    <Link id={post.slug} href={`/den/${post.slug}`} className="text-lg">
      {`${date.getDate()}. `}
    </Link>
  );
}
