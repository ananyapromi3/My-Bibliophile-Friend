import runQuery from "../../../../oracle/query";

export default async function handler(req, res) {
  let offerInfo = req.body;
  offerInfo = JSON.parse(offerInfo);
  const message = offerInfo.message;
  const photo = offerInfo.photoURL;
  const userId = offerInfo.userId;
  const isbn = offerInfo.bookISBN;
  let time = offerInfo.time;
  time = Date.parse(time) + 6 * 3600 * 1000;
  const status = "offered";
  let count = await runQuery(`SELECT COUNT(*) C FROM OFFER`);
  count = count.rows[0].C + 1;
  let email = await runQuery(
    `SELECT EMAILID E FROM BOOKFRIEND WHERE BOOKFRIENDID=${userId}`
  );
  email = email.rows[0].E;
  const response = await runQuery(
    `INSERT INTO OFFER VALUES (${count}, '${message}', '${photo}', '${email}', '${isbn}', TO_DATE('1970-01-01','YYYY-MM-DD HH24:MI:SS')+(${time}/(1000*60*60*24)), '${status}')`
  );
  res.status(200).json(response);
}
