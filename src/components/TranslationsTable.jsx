import TableRow from "./TableRow";

function TranslationsTable({ terms }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Angļu valodā</th>
          <th>Latviešu valodā</th>
        </tr>
      </thead>
      <tbody>
        {terms.map((term, index) => (
          <TableRow key={index} en={term.en} lv={term.lv} />
        ))}
      </tbody>
    </table>
  );
}

export default TranslationsTable;
