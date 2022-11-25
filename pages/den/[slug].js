import Error from "next/error";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) return <Error statusCode={404} />;

  return (
    <Layout>
      <h1>{post.dayName}</h1>
    </Layout>
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
        slug,
      },
    },
  };
}
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
