import runQuery from "../../../../oracle/query";

export default async function handler(req, res) {
  let loginInfo = req.body;
  loginInfo = JSON.parse(loginInfo);
  const email = loginInfo.email;
  const password = loginInfo.password;
  const response = await runQuery(
    `SELECT * FROM USERMAN WHERE EMAILID LIKE '${email}' AND PASSWORD LIKE '${password}'`
  );
  console.log(response.rows);
  res.status(200).json(response.rows);
}
