import Link from "next/link";

export default function ArticleHeader() {
  return (
    <header className="w-full">
      <nav className="m-4">
        <Link href="/" className="text-3xl font-semibold underline">
          Adventní cesta
        </Link>
      </nav>
    </header>
  );
}
