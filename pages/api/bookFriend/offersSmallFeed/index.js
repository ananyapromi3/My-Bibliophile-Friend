import runProcedureWithOutBinds from "../../../../oracle/procedureOutBinds";
import runQuery from "../../../../oracle/query";
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function handler(req, res) {
  let notiInfo = req.body;
  notiInfo = JSON.parse(notiInfo);
  const notiId = notiInfo.notiId;
  const userId = notiInfo.userId;
  const offerId1 = notiInfo.offerId1;
  const offerId2 = notiInfo.offerId2;
  const binds = {
    notiId: notiId,
    offerId1: offerId1,
    offerId2: offerId2,
    msg: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
  };
  console.log(binds);
  const response = await runProcedureWithOutBinds(
    `DECLARE
        MS1 VARCHAR2(50);
        MS2 VARCHAR2(50);
        MS3 VARCHAR2(50);
        MS4 VARCHAR2(50);
    BEGIN
        ACCEPT_OFFER_FINALLY (:offerId1, MS1);
        ACCEPT_OFFER_FINALLY (:offerId2, MS2);
        IF MS1 = 'CREATED' AND MS2 = 'CREATED' THEN
            DISABLE_NOTIFICATION (:notiId, MS3);
            CREATE_EXCHANGE_OFFER(:offerId1, :offerId2, :msg);
        END IF;
    END;`,
    binds
  );
  res.status(200).json(response);
}
