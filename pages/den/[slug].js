import Error from "next/error";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import RenderDate from "../../components/utils/date";
import ArticleHeader from "../../components/header";
import Link from "next/link";

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) return <Error statusCode={404} />;
  const title = `${post.dayName} - Adventní cesta`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <ArticleHeader />
        <article className="mx-6 max-w-[800px]">
          <h1 className="text-4xl font-bold mb-4">{post.dayName}</h1>
          <RenderDate
            dateString={post.date}
            className="font-semibold text-xl"
          />
          <h2 className="text-2xl font-bold mt-4">Úryvek z Bible</h2>
          <span className="font-mono">({post.source})</span>
          <p className="mt-2 italic tracking-wide text-lg">{post.quote}</p>
          <h2 className="text-2xl font-bold mt-4 mb-2">Zamyšlení</h2>
          <p className="tracking-wide text-lg whitespace-pre-line">
            {post.reflexion}
          </p>
          <p className="text-lg mt-4 text-stone-600">
            (Autor zamyšlení:{" "}
            <Link href={`/`} className="underline">
              {post.author}
            </Link>
            )
          </p>
          <h2 className="text-2xl font-bold mt-4 mb-2">Vstupní modlitba</h2>
          <p className="tracking-wide text-lg mb-6">{post.preayer}</p>
        </article>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const dayName = post.dayName;
  const date = post.date;
  const quote = post.quote;
  const source = post.source;
  const reflexion = post.reflexion;
  const preayer = post.preayer;
  const author = post.author;
  const slug = post.slug;

  return {
    props: {
      post: {
        ...post,
        dayName,
        date,
        quote,
        source,
        reflexion,
        preayer,
        author,
        slug,
      },
    },
  };
}
/**
 * To builds pages
 * @returns
 */
export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
