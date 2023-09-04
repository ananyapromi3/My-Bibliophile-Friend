import { useState } from "react";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../../oracle/queryBinds";

export default async function handler(req, res) {
  const x = req.query.term;
  const response = await runQueryWithBinds(
    `UPDATE NOTI
    SET STATUS='READ' 
    WHERE EMAILID=GET_EMAIL_FROM_BOOKFRIENDID(:id)`,
    { id: x }
  );
  res.json(response.rows);
}
