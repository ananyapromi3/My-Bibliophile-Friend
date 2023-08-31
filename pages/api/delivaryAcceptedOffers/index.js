import { useState } from "react";
import runQuery from "../../../oracle/query";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../oracle/queryBinds";
export default async function handler(req, res) {
  const id = req.query.id;
  console.log(id);
  // console.log(x);
  const binds = {
    id: id,
  };

  const response = await runQueryWithBinds(
    `SELECT D.EXCHANGEID, D.FEE, D.STATUS,
    GET_NAME_FROM_EMAILID(O.USEREMAILID) NAME1, GET_NAME_FROM_EMAILID(U.USEREMAILID) NAME2,
    GET_CONTACT_FROM_EMAIL(O.USEREMAILID) PHN1, GET_CONTACT_FROM_EMAIL(U.USEREMAILID) PHN2
    FROM DELIVARYOFFER D
    JOIN EXCHANGEOFFER E
    ON D.EXCHANGEID=E.EXCHANGEID
    JOIN OFFER O
    ON O.OFFERID=E.OFFERID1
    JOIN OFFER U
    ON U.OFFERID=E.OFFERID2
    WHERE D.DELIVARYMANID = :id AND D.STATUS = 'pending'`,
    binds
  );
  console.log(response);
  res.json(response.rows);
}
