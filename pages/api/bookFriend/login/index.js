import runQuery from "../../../../oracle/query";

export default async function handler(req, res) {
  let loginInfo = req.body;
  loginInfo = JSON.parse(loginInfo);
  const email = loginInfo.email;
  const password = loginInfo.password;
  const response = await runQuery(
    `SELECT * FROM USERMAN WHERE EMAILID LIKE '${email}'`
  );
  console.log(response.rows);
  res.json(response.rows);
}
