import { useState } from "react";
// import runQuery from "../../../oracle/query";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../../oracle/queryBinds";
// import runProcedureWithOutBinds from "../../../oracle/procedureOutBinds";
import oracledb from "oracledb";
import runProcedureWithOutBinds from "../../../../oracle/procedureOutBinds";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
export default async function handler(req, res) {
  let notiInfo = req.body;
  notiInfo = JSON.parse(notiInfo);
  // console.log(notiInfo);
  // const eid = req.query.eid;
  // const delid = req.query.delid;
  // const fee = req.query.fee;
  const binds = {
    eid: notiInfo.exchangeId,
    delid: notiInfo.delivaryManId,
    fee: notiInfo.fee,
    msg: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
  };
  const response = await runProcedureWithOutBinds(
    `DECLARE
      MSG1 VARCHAR2(20);
    BEGIN
      CONFIRM_DELIVARY(:eid, :delid, :fee, :msg);
      DISABLE_EXCHANGEOFFER(:eid, MSG1);
    END;
    `,
    binds
  );
  res.status(200).json(response);
}
