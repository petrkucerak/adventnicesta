import Link from "next/link";

export default function Button({ href, content }) {
  return (
    <Link
      href={href}
      className="bg-violet-light uppercase rounded text-white px-4 py-2 font-semibold hover:scale-110 duration-200"
    >
      <button title={content}>{content}</button>
    </Link>
  );
}
