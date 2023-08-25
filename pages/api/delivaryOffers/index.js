import { useState } from "react";
import runQuery from "../../../oracle/query";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../oracle/queryBinds";
export default async function handler(req, res) {
  // const router = useRouter();
  // const userId = router.query.userId;
  // const x = req.query.term;
  // console.log(x);
  const response = await runQuery(
    `SELECT 
    EXCHANGEID, OFFERID1, OFFERID2, STATUS,
    GET_EMAIL_FROM_OFFERID(OFFERID1) EMAIL1,
    GET_EMAIL_FROM_OFFERID(OFFERID2) EMAIL2,
    GET_NAME_FROM_EMAILID(GET_EMAIL_FROM_OFFERID(OFFERID1)) NAME1,
    GET_NAME_FROM_EMAILID(GET_EMAIL_FROM_OFFERID(OFFERID2)) NAME2,
    CALCULATE_DISTANCE(GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID1)), 
    GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID1)), 
    GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID2)), 
    GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID2))) DISTANCE
    FROM EXCHANGEOFFER WHERE STATUS = 'PENDING'
    ORDER BY DISTANCE ASC`
  );
  res.json(response.rows);
}
