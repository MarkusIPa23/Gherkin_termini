import TranslationsTable from "./TranslationsTable";

const gherkinTerms = [
  { en: "Feature", lv: "Funkcionālā iezīme" },
  { en: "Scenario", lv: "Scenārijs" },
  { en: "Given", lv: "Kad" },
  { en: "When", lv: "Ja" },
  { en: "Then", lv: "Tad" },
  { en: "And", lv: "Un" },
  { en: "Or", lv: "Vai" },
  { en: "But", lv: "Bet" },
  { en: "Background", lv: "Konteksts" },
  { en: "Rule", lv: "Noteikums" },
  { en: "Scenario Outline", lv: "Scenārijs pec parauga" },
  { en: "Examples", lv: "Piemeri" },
  { en: "User Story", lv: "Lietotājastāsts" },
  { en: "#", lv: "Komentārs" },
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
