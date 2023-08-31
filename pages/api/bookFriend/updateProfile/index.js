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
    lastname: loginInfo.lastname,
    latitude: loginInfo.latitude,
    longitude: loginInfo.longitude,
    phn1: loginInfo.phn1,
    phn2: loginInfo.phn2,
  };
  console.log(binds);
  const response = await runProcedureWithOutBinds(
    `UPDATE USERMAN 
    SET PASSWORD = DBMS_CRYPTO.encrypt(UTL_RAW.CAST_TO_RAW(:password), 4353, 
    UTL_RAW.CAST_TO_RAW ('MyBibliophileFriend')),
    FIRSTNAME = :firstname,
    LASTNAME = :lastname,
    LONGITUDE = :longitude,
    LATITUDE = :latitude,
    CONTACTNO1 = :phn1,
    CONTACTNO2 = :phn2
    WHERE EMAILID = :email`,
    binds
  );
  // console.log(response);
  res.json(response);
  // res.status(200).json(response.rows);
}
