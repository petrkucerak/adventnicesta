import Head from "next/head";
import Layout from "../components/layout";
import ArticleHeader from "../components/header";

export default function SlovaAnnyMaclove() {
  return (
    <>
      <Head>
        <title>Slova Anny Maclové - Adventní cesta</title>
      </Head>
      <Layout>
        <ArticleHeader />
        <article className="mx-6 max-w-[800px]">
          <h1 className="text-4xl font-bold mb-8">Slova Anny Maclové</h1>
          <p className="font-semibold text-lg mb-1">Vážení a milí,</p>
          <p className="text-lg mb-4">
            děkuji vám, že držíte v rukou tuto brožuru a necháte se jí vést
            letošní dobou adventní až do Štědrého dne.
          </p>
          <p className="text-lg mb-4">
            V průběhu Adventu se připravujeme na nejkrásnější svátky v roce –
            Vánoce. Neznám mnoho lidí, kteří se na ně netěší. Obvykle jsou to
            lidé vnitřně strádající, osamělí, opuštění. Ale také jim je určena
            ta radostná zvěst, všichni bez rozdílu jsme zváni do Betléma k
            jesličkám.
          </p>
          <p className="text-lg mb-4">
            Bůh, který je LÁSKA, nám sesílá na svět svého Syna v podobě malého
            Dítěte a nabízí nám příležitost přijmout lásku do svého srdce, učit
            se lásce a v ní růst, lásku zakoušet a ji sdílet. Na naší životní
            cestě nás nenechává samotné, ale jako laskavý Otec se stará a nabízí
            nám přítomnost svého Syna Ježíše Krista, jehož následováním smíme
            zakoušet smysl své existence, vnímat naději a radost z toho, že nás
            má nekonečně rád a v závěru spočinout v Jeho láskyplné náruči.
          </p>
          <p className="text-lg mb-4">
            Kdo otevře své srdce a přijme tuto Boží lásku, má v úctě sebe i
            bližního svého, má potřebu lásku sdílet a rozdávat v drobných
            skutcích každý den, vidí kolem sebe nejenom své blízké, ale vnímá
            také ty, kteří nikoho nemají, jsou bezradní, žijí na ulici či
            zavřeni ve svém bytě bez kontaktu s okolím, jsou nemocní, potřebují
            pomoc. Boží láska proměňuje také celou komunitu. Církev usiluje o
            šíření zvěsti o Bohu skrze Slovo a svátosti, ale také skrze službu
            zejména lidem trpícím, ohroženým a žijícím na okraji společnosti.
          </p>
          <p className="text-lg mb-4">
            Církev uplatňuje toto své poslání již od svého zrodu skrze různé
            struktury. V tomto období si připomínáme století organizovaného
            charitního díla na území naší republiky a 30. výročí založení
            Diecézní katolické charity Hradec Králové a některých farních či
            oblastní charit v naší diecézi, které navázaly na rozmach Charity
            zejména v meziválečném období, která byla později v dobách komunismu
            spíš trpěna a značně ochromena.
          </p>
          <p className="text-lg mb-4">
            Právě při této příležitosti jsme oslovili ty, kteří v Charitě v naší
            diecézi pracují jako zaměstnanci nebo dobrovolníci, případně nás
            duchovně provázejí. Přijměte proto úvahy těch, kteří zareagovali a
            nabídli své reflexe na zadané čtení.
          </p>
          <p className="text-lg mb-4">
            Zvu vás tedy na cestu k Jesličkám spolu s těmi, kteří se různým
            způsobem podílejí na šíření zvěsti o tom, že BŮH JE LÁSKA
            praktickými skutky – dochází k nemocným, radí bezradným, koordinují
            provoz organizace či řídí charitní zařízení, dělí se o svůj volný
            čas s potřebnými.
          </p>
          <p className="text-lg mb-4">
            Pojďme spolu do Betléma, přivítejme Božího Syna – malé Jezulátko a
            po Novém roce se vydejme spolu s králi přát všem lidem štěstí,
            zdraví, pokoj, usilujme o to, aby vánoční mysterium lásky odezněním
            svátků nevyprchalo, ale žili jsme ho všichni dál a každý den tam,
            kde zrovna jsme.
          </p>
          <p className="text-lg mb-8 italic">Anna Maclová</p>
        </article>
      </Layout>
    </>
  );
}
