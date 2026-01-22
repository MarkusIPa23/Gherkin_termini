import TranslationsTable from "./TranslationsTable";

const gherkinTerms = [
  { en: "Feature", lv: "Funkcionālā iezīme" },
  { en: "Scenario", lv: "Scenārijs" },
  { en: "Given", lv: "Ņemot vērā" },
  { en: "When", lv: "Kad" },
  { en: "Then", lv: "Tad" },
  { en: "And", lv: "Un" },
  { en: "But", lv: "Bet" },
];

function Translations() {
  return (
    <>
      <h1>Gherkin termini</h1>
      <TranslationsTable terms={gherkinTerms} />
    </>
  );
}

export default Translations;
