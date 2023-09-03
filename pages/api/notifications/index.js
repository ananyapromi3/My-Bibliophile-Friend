import { useState } from "react";
import runQuery from "../../../oracle/query";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../oracle/queryBinds";
export default async function handler(req, res) {
  const x = req.query.term;
  const response = await runQueryWithBinds(
    `SELECT N.NOTIFICATIONID, N.OFFERID, N.STATUS, N.EMAILWHOREQUESTED, O.BOOKCONDITIONPHOTO, 
    B.ISBN, B.TITLE, U.FIRSTNAME||' '||U.LASTNAME NAMEWHOREQUESTED FROM NOTIFICATION1 N 
    JOIN OFFER O ON N.OFFERID=O.OFFERID 
    JOIN BOOK B ON O.ISBN=B.ISBN 
    JOIN USERMAN U ON N.EMAILWHOREQUESTED=U.EMAILID
    WHERE O.USEREMAILID = GET_EMAIL_FROM_BOOKFRIENDID(:id) AND N.STATUS='show'`,
    { id: x }
  );
  res.json(response.rows);
}
