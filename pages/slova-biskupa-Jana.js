import Head from "next/head";
import Layout from "../components/layout";
import ArticleHeader from "../components/header";

export default function SlovaBiskupaJana() {
  return (
    <>
      <Head>
        <title>Slova Biskupa Jana - Adventní cesta</title>
      </Head>
      <ArticleHeader />
      <article className="mx-6 max-w-[800px]">
        <h1 className="text-4xl font-bold mb-8">Slova biskupa Jana</h1>
        <p className="font-semibold text-lg mb-1">Bratři a sestry v Kristu, milí čtenáři,</p>
        <p className="text-lg mb-4">
          adventní doba je příliš krátká na to, abychom si v ní plně uvědomili
          velikost Božího daru, za který Mu o Vánocích děkujeme: náš Stvořitel s
          námi přichází do přímého, mezilidského kontaktu. Nabízí nám osobní
          vztah, který navíc přesahuje časnost tohoto světa. Vlastně ani celý
          život není dost dlouhý na pochopení tohoto tajemství. Když však Ježíš
          vyzývá učedníky, aby Ho následovali, nevybízí je jenom k abstraktním
          úvahám. Především chce, aby vstali, vyšli mezi druhé lidi a
          napodobovali Ho. Aby činili to, co činil a činí On.
        </p>
        <p className="text-lg mb-4">
          Ač mnohá Kristova slova, činy a podobenství nechávají prostor
          přemýšlení o jejich významu, v základu všech je beze sporu
          milosrdenství. Bůh člověku prokazuje nezaslouženou milost. Přichází za
          ním, i když nemusí, učí ho a vede, i když nemusí, obětuje se za něho,
          i když nemusí. Napodobovat našeho Pána tedy znamená v první řadě činit
          skutky nezištné lásky. Je k nim povolán každý křesťan jako jednotlivec
          i Církev jako společenství na místní, diecézní i celosvětové úrovni.
          Charita, jak se tento její rozměr tradičně nazývá, tedy není jen
          doplňkovou institucí, ale projevem samotného základu našeho
          křesťanského povolání. Není jen záležitostí hromadných sbírek či
          finančních darů, ale výchozího životního postoje: každý z nás je do
          života povolán především proto, aby konkrétními skutky prokazoval
          druhým caritas, nezištnou, milosrdnou lásku.
        </p>
        <p className="text-lg mb-4">
          Pokud se v adventní době vydáme právě touto cestou, pak se pravé
          podstatě vánočního daru přiblížíme mnohem více než sebevětší snahou
          vyložit jej teoreticky, „od stolu“. Děkuji autorům všech textů v této
          brožuře, jejichž moudrost a zkušenosti nás budou letošní adventní
          dobou v tomto smyslu provázet, a ze srdce Vám na jejím počátku žehnám!
        </p>
        <p className="text-lg mb-1 italic">V Kristu a Marii,</p>
        <p className="text-lg mb-8 italic">Váš + biskup Jan</p>
      </article>
      <Layout></Layout>
    </>
  );
}
