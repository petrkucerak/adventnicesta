import Head from "next/head";
import Layout from "../components/layout";
import Calendar from "../components/utils/calendar";
import { getAllPosts } from "../lib/api";

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>Adventní cesta</title>
      </Head>
      <Layout>
        <div>
          <h1 className="text-4xl font-bold">Adventní cesta</h1>
        </div>
        <Calendar posts={allPosts} />
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
