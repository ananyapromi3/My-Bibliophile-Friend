import { useState } from "react";
import runQuery from "../../../oracle/query";
import runQueryWithBinds from "../../../oracle/queryBinds";
export default async function handler(req, res) {
  const result = await runQuery(
    `SELECT DISTINCT GENRE FROM BOOK WHERE GENRE IS NOT NULL ORDER BY GENRE ASC`
  );
//   console.log(result.rows);
  let arr = [];
  for (let i = 0; i < result.rows.length; i++) {
    arr.push(result.rows[i].GENRE);
  }
//   console.log(arr);
  const result1 = await runQuery(
    `SELECT DISTINCT NAME FROM WRITTENBY WHERE NAME IS NOT NULL ORDER BY NAME ASC`
  );
  let arr1 = [];
  for (let i = 0; i < result1.rows.length; i++) {
    arr1.push(result1.rows[i].NAME);
  }
  let response = {
    genres: arr,
    authors: arr1,
  };
//   console.log(response);
  res.json(response);
}
