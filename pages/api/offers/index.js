import { useState } from "react";
import runQuery from "../../../oracle/query";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../oracle/queryBinds";
export default async function handler(req, res) {
  // const router = useRouter();
  // const userId = router.query.userId;
  const x = req.query.term;
  // console.log(x);
  const response = await runQueryWithBinds(
    `SELECT OFFERID, MESSAGE, BOOKCONDITIONPHOTO, USEREMAILID, ISBN, TIME, STATUS, 
    GET_NAME_FROM_EMAILID(USEREMAILID) NAME,
    CALCULATE_DISTANCE(GET_LATITUDE_FROM_EMAIL(USEREMAILID), 
    GET_LONGITUDE_FROM_EMAIL(USEREMAILID), 
    GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_BOOKFRIENDID(:id)), 
    GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_BOOKFRIENDID(:id))) DISTANCE
    FROM OFFER WHERE USEREMAILID NOT LIKE GET_EMAIL_FROM_BOOKFRIENDID(:id) 
    AND STATUS = 'offered' 
    ORDER BY DISTANCE ASC`,
    { id: x }
  );
  res.json(response.rows);
}
