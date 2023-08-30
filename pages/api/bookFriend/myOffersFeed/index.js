import runProcedureWithOutBinds from "../../../../oracle/procedureOutBinds";
import runQuery from "../../../../oracle/query";
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function handler(req, res) {
  let notiInfo = req.body;
  notiInfo = JSON.parse(notiInfo);
  console.log(notiInfo);
  const userId = notiInfo.userId;
  const offerId = notiInfo.offerId;
  const binds = {
    offerId: offerId,
    msg: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
  };
  console.log(binds);
  const response = await runProcedureWithOutBinds(
    `BEGIN
        DELETE_OFFER(:offerid, :msg);
    END;`,
    binds
  );
  res.status(200).json(response);
}
