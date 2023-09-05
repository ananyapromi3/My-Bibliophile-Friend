import { useState } from "react";
import runQuery from "../../../oracle/query";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../oracle/queryBinds";
export default async function handler(req, res) {
  // const router = useRouter();
  // const userId = router.query.userId;
  const x = req.query.term;
  console.log(x);
  // console.log(x);
  const response = await runQueryWithBinds(
    `SELECT N.NOTIFICATIONID, O.OFFERID, O.MESSAGE, GET_BOOK_NAME_FROM_OFFERID(O.OFFERID) BOOK,
    O.BOOKCONDITIONPHOTO, O.BOOKCONDITIONPHOTO1, O.BOOKCONDITIONPHOTO2, 
    O.BOOKCONDITIONPHOTO3, O.BOOKCONDITIONPHOTO4,
    O.USEREMAILID, O.ISBN, O.TIME, O.STATUS, 
    GET_NAME_FROM_EMAILID(O.USEREMAILID) NAME
    FROM OFFER O JOIN NOTIFICATION1 N ON N.EMAILWHOREQUESTED = O.USEREMAILID
		WHERE O.STATUS = 'offered' AND N.NOTIFICATIONID = :id AND N.STATUS='show'`,
    { id: x }
  );
  res.json(response.rows);
}
