import { useState } from "react";
import runQuery from "../../../oracle/query";
export default async function handler(req, res) {
  let x = req.query.term;
  x = x.replace("'", "''");
  const response = await runQuery(
    `SELECT * FROM BOOK WHERE UPPER(TITLE) LIKE UPPER('%${x}%') ORDER BY TITLE`
  );
  var books = [];
  for (let i = 0; i < response.rows.length; i++) {
    let book = response.rows[i];
    let r = await runQuery(
      `SELECT * FROM AUTHOR A
    WHERE A.NAME IN (SELECT W.NAME FROM WRITTENBY W WHERE W.ISBN='${book.ISBN}')`
    );
    book["AUTHOR"] = r.rows;
    books.push(book);
  }
  res.json(books);
}
