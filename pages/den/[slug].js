import Error from "next/error";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import RenderDate from "../../components/utils/date";
import ArticleHeader from "../../components/header";

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
        <article className="mx-4 max-w-[800px]">
          <h1 className="text-4xl font-bold mb-4">{post.dayName}</h1>
          <RenderDate dateString={post.date} className="font-semibold" />
          <h2 className="text-xl font-bold mt-4 mb-2">Úryvek z Bible</h2>
          <p className="">{post.quote}</p>
          <h2 className="text-xl font-bold mt-4 mb-2">Zamyšlení</h2>
          <p>{post.reflexion}</p>
          <h2 className="text-xl font-bold mt-4 mb-2">Vstupní modlitba</h2>
          <p>{post.preayer}</p>
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
