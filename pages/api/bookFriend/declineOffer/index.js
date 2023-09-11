import { useState } from "react";
import { useRouter } from "next/router";
import runProcedureWithOutBinds from "../../../../oracle/procedureOutBinds";
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
export default async function handler(req, res) {
  // const router = useRouter();
  // const userId = router.query.userId;
  const x = req.query.term;
  // console.log(x);
  const binds = {
    id: x,
    msg: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
  };
  // console.log(binds);
  const response = await runProcedureWithOutBinds(
    `BEGIN
        DECLINE_OFFER(:id, :msg);
    END;`,
    binds
  );
  res.json(response);
}
