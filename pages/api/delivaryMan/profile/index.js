import { useState } from "react";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../../oracle/queryBinds";
export default async function handler(req, res) {
  const x = req.query.term;
  console.log(x);
  const response = await runQueryWithBinds(
    `SELECT EMAILID, 
    UTL_RAW.CAST_TO_varchar2(DBMS_CRYPTO.decrypt(PASSWORD, 4353, 
      UTL_RAW.CAST_TO_RAW ('MyBibliophileFriend'))) PASS,
    FIRSTNAME, LASTNAME, DATEOFBIRTH, GENDER, CONTACTNO1, CONTACTNO2
    FROM USERMAN 
    WHERE EMAILID=GET_EMAIL_FROM_DELIVARYMANID(:id)`,
    { id: x }
  );
  console.log(response.rows);
  res.json(response.rows);
}
