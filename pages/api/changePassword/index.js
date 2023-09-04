import { Console } from "console";
// import runProcedureWithOutBinds from "../../../../oracle/procedureOutBinds";
import runProcedureWithOutBinds from "../../../oracle/procedureOutBinds";
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function handler(req, res) {
  let loginInfo = req.body;
//   console.log(typeof loginInfo);
//   loginInfo = JSON.parse(loginInfo);
  const binds = {
    email: loginInfo.email,
    currPass: loginInfo.currentPassword,
    newPass: loginInfo.newPassword,
    msg: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
  };
  console.log(binds);
  const response = await runProcedureWithOutBinds(
    `BEGIN
        UPDATE_PASS (:email, :currPass, :newPass, :msg);
    END;`,
    binds
  );
  // console.log(response);
  res.json(response);
  // res.status(200).json(response.rows);
}
