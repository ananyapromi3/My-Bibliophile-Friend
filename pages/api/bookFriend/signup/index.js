import { Console } from "console";
import runProcedureWithOutBinds from "../../../../oracle/procedureOutBinds";
import runQuery from "../../../../oracle/query";
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function handler(req, res) {
  let loginInfo = req.body;
  loginInfo = JSON.parse(loginInfo);
  const binds = {
    email: loginInfo.email,
    password: loginInfo.password,
    firstname: loginInfo.firstname,
    dob: loginInfo.dob,
    gender: loginInfo.sex,
    lastname: loginInfo.lastname,
    latitude: loginInfo.latitude,
    longitude: loginInfo.longitude,
    // latitude: 23.7661639,
    // longitude: 90.3588734,
    phn1: loginInfo.phn1,
    phn2: loginInfo.phn2,
    msg1: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
    msg2: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
  };
  // console.log(binds);
  const response = await runProcedureWithOutBinds(
    `BEGIN
      SIGNUP(:email, :password, :firstname, TO_DATE(:dob, 'YYYY-MM-DD'), :gender, :lastname, :latitude, :longitude, :phn1, :phn2, :msg1);
      ADD_TO_BOOKFRIEND(:email, :msg2);
    END;`,
    binds
  );
  // console.log(response);
  res.json(response);
  // res.status(200).json(response.rows);
}
