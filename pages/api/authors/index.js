import { useState } from "react";
import runQuery from "../../../oracle/query";
export default async function handler(req, res) {
  let x = req.query.term;
  x = x.replace("'", "''");
  const response = await runQuery(
    `SELECT * FROM AUTHOR A
    WHERE A.NAME IN (SELECT W.NAME FROM WRITTENBY W WHERE W.ISBN=:isbn)`,
    { isbn: x }
  );
  res.json(response.rows);
}
