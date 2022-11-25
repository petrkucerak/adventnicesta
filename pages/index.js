import Head from "next/head";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>Adventní cesta</title>
      </Head>
      <Layout>
        <h1 className="text-4xl font-bold">Adventni cesta</h1>
        <div></div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
}
