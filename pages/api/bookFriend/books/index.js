import runProcedureWithOutBinds from "../../../../oracle/procedureOutBinds";
import runQuery from "../../../../oracle/query";
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function handler(req, res) {
  let offerInfo = req.body;
  offerInfo = JSON.parse(offerInfo);
  const message = offerInfo.message;
  const photo = offerInfo.photoURL;
  const userId = offerInfo.userId;
  const isbn = offerInfo.bookISBN;
  const binds = {
    message: message,
    photo: photo,
    id: userId,
    isbn: isbn,
    msg: { dir: oracledb.BIND_OUT, type: oracledb.VARCHAR2 },
  };
  const response = await runProcedureWithOutBinds(
    `BEGIN
      CREATE_OFFER(:message, :photo, :id, :isbn, :msg);
    END;`,
    binds
  );
  res.status(200).json(response);
}
