import runQuery from "../../../../oracle/query";
import runQueryWithBinds from "../../../../oracle/queryBinds";
import Jwt from "jsonwebtoken";

export default async function handler(req, res) {
  let loginInfo = req.body;
  loginInfo = JSON.parse(loginInfo);
  const binds = { email: loginInfo.email, password: loginInfo.password };
  const response = await runQueryWithBinds(
    `SELECT (SELECT DELIVARYMANID FROM DELIVARYMAN B WHERE U.EMAILID=B.EMAILID) ID 
    FROM USERMAN U WHERE U.EMAILID LIKE :email AND 
    UTL_RAW.CAST_TO_varchar2(DBMS_CRYPTO.decrypt(U.PASSWORD, 4353, UTL_RAW.CAST_TO_RAW ('MyBibliophileFriend')))
    = :password`,
    binds
  );
  // console.log(response.rows);
  if (response.rows.length == 1 && response.rows[0].ID) {
    const token = Jwt.sign({ id: response.rows[0].ID }, "bibliophile");
    res
      .status(200)
      .json({ token: token, success: true, id: response.rows[0].ID });
  } else {
    res.status(200).json({ success: false, error: "Wrong Information" });
  }
  // res.status(200).json(response.rows);
}
