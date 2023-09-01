import { useState } from "react";
import runQuery from "../../../oracle/query";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../oracle/queryBinds";
export default async function handler(req, res) {
  const x = req.query.term;
  const response = await runQueryWithBinds(
    `SELECT * FROM NOTI
    WHERE EMAILID = GET_EMAIL_FROM_BOOKFRIENDID(:id)
    ORDER BY TIME DESC`,
    { id: x }
  );
  res.json(response.rows);
}
