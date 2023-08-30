import { useState } from "react";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../../oracle/queryBinds";
export default async function handler(req, res) {
  // const router = useRouter();
  // const userId = router.query.userId;
  const x = req.query.term;
  // console.log(x);
  const response = await runQueryWithBinds(
    `SELECT N.NOTIFICATIONID
    FROM NOTIFICATION1 N 
    JOIN OFFER O ON N.OFFERID=O.OFFERID 
    WHERE O.USEREMAILID = GET_EMAIL_FROM_BOOKFRIENDID(:id) AND N.STATUS='show'`,
    { id: x }
  );
  res.json(response.rows);
}
