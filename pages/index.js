import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adventní cesta</title>
      </Head>
      <Layout>
        <h1 className="text-4xl font-bold">Adventni cesta</h1>
      </Layout>
    </>
  );
}
