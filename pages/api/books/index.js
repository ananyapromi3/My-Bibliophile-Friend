import runQuery from "../../../oracle/query";
export default async function handler(req, res) {
  let x = req.query.term;
  x = x.replace("'", "''");

  const response = await runQuery(
    `SELECT * FROM BOOK WHERE UPPER(TITLE) LIKE UPPER('%${x}%')`
  );
  // console.log(response.rows);
  res.json(response.rows);
  // res.json(null);
}
