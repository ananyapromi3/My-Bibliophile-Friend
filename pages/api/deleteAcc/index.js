import runProcedureWithOutBinds from "../../../oracle/procedureOutBinds";
import runQuery from "../../../oracle/query";
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function handler(req, res) {
  let user = req.body;
  user = JSON.parse(user);
  // console.log(notiInfo);
  const email = user.email;
  //   const offerId = notiInfo.offerId;
  const binds = {
    email: email,
    msg: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
  };
  // console.log(binds);
  const response = await runProcedureWithOutBinds(
    `DECLARE
    BEGIN
        DELETE_USER(:email, :msg);
    END;`,
    binds
  );
  res.status(200).json(response);
}
