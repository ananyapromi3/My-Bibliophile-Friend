import runQuery from "../../../../oracle/query";

export default async function handler(req, res) {
  //   let x = req.query.term;
  //   x = x.replace("'", "''");
  //   const loginInfo = req.body.loginInfo;
  //   console.log(loginInfo);
  let loginInfo = req.body;
  loginInfo = JSON.parse(loginInfo);
  // console.log(typeof loginInfo);
  const email = loginInfo.email;
  const password = loginInfo.password;
  // console.log(`SELECT * FROM USERMAN WHERE EMAILID LIKE '${email}'`);
  const response = await runQuery(
    `SELECT * FROM USERMAN WHERE EMAILID LIKE '${email}'`
  );
  console.log(response.rows);
  res.json(response.rows);
}
