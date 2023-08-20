import runQuery from "../../../../oracle/query";
import runQueryWithBinds from "../../../../oracle/queryBinds";

export default async function handler(req, res) {
  let loginInfo = req.body;
  loginInfo = JSON.parse(loginInfo);
  const binds = { email: loginInfo.email, password: loginInfo.password };
  const response = await runQueryWithBinds(
    `SELECT EMAILID, PASSWORD, CONTACTNO1, CONTACTNO2, FIRSTNAME, LASTNAME, DATEOFBIRTH, GENDER, LATITUDE, LONGITUDE, (SELECT BOOKFRIENDID FROM BOOKFRIEND B WHERE U.EMAILID=B.EMAILID) ID FROM USERMAN U WHERE U.EMAILID LIKE :email AND U.PASSWORD LIKE :password`,
    binds
  );
  // console.log(response.rows);
  res.status(200).json(response.rows);
}
