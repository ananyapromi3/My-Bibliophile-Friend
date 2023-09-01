import { useState } from "react";
import runQuery from "../../../oracle/query";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../oracle/queryBinds";
export default async function handler(req, res) {
  const id = req.query.id;
  console.log(id);
  const binds = {
    id: id,
  };

  const response = await runQueryWithBinds(
    `SELECT GET_NAME_FROM_EMAILID(T.MAIL) NAME, SUM(SHARE_CNT) SHARED_COUNT, T.MAIL EMAIL
    FROM (SELECT A.MAIL2 MAIL,COUNT(*) SHARE_CNT
    FROM (SELECT EXCHANGEID,GET_EMAIL_FROM_OFFERID(OFFERID1) MAIL1,
    GET_EMAIL_FROM_OFFERID(OFFERID2) MAIL2
    FROM  EXCHANGEOFFER) A
    WHERE A.MAIL1 = GET_EMAIL_FROM_BOOKFRIENDID(:id)
    GROUP BY A.MAIL2
    UNION
    SELECT A.MAIL1 MAIL,COUNT(*) SHARE_CNT
    FROM (SELECT EXCHANGEID,GET_EMAIL_FROM_OFFERID(OFFERID1) MAIL1,
    GET_EMAIL_FROM_OFFERID(OFFERID2) MAIL2
    FROM  EXCHANGEOFFER) A
    WHERE A.MAIL2 = GET_EMAIL_FROM_BOOKFRIENDID(:id)
    GROUP BY A.MAIL1) T
    GROUP BY T.MAIL
    ORDER BY SHARED_COUNT DESC`,
    binds
  );
  console.log(response);
  res.json(response.rows);
}
