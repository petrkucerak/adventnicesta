import Head from "next/head";
import Layout from "../components/layout";
import Button from "../components/utils/button";
import Calendar from "../components/utils/calendar";
import NavButtons from "../components/utils/nav-buttons";
import { getAllPosts } from "../lib/api";

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>Adventní cesta</title>
      </Head>
      <Layout>
        <div className="mx-6 flex flex-col">
          <img
            src="/icon.svg"
            className="h-48"
            alt="Fialový rozcestník"
            title="Logo adventní cesty"
          />
          <h1 className="text-4xl font-bold text-center">Adventní cesta</h1>
        </div>
        <NavButtons posts={allPosts} />
        <Calendar posts={allPosts} />
        <h2 className="mx-6 text-2xl uppercase font-bold">O projektu</h2>
        <p className="mx-6 text-lg mb-8">
          Adventní cesta je webová aplikace k tištěné verzi knihy Advent, která
          se každoročně vydává v Královéhradecké diecézi. Letos do knihy
          přispívali katecheté naší diecéze. Každý den si můžeš přečíst
          evangelium, zamyšlení a krátkou modlitbu.
        </p>
        <div className="mx-6 flex flex-row justify-around mb-8 flex-wrap">
          <Button href={"/autori"} content="Autoři" />
          <Button href={"/slova-biskupa-Jana"} content="Slova biskupa Jana" />
          <Button href={"/slova-Prokopa-Broze"} content="Slova Prokopa Brože" />
          <Button
            href={"https://forms.gle/n19QvNFMW5A5RbNBA"}
            content="Zpětná vazba"
            target={"_blank"}
            rel={"noreferrer noopener external"}
          />
          <Button
            href={
              "https://open.spotify.com/show/2I3GPLeVZdPH8dcuVYCDoJ?si=7ad72e34e408463e"
            }
            content="Audio nahrávky na Spotify"
            target={"_blank"}
            rel={"noreferrer noopener external"}
          />
        </div>
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
