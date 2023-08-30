import runProcedureWithOutBinds from "../../../../oracle/procedureOutBinds";
import runQuery from "../../../../oracle/query";
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function handler(req, res) {
  let offerInfo = req.body;
  offerInfo = JSON.parse(offerInfo);
  const message = offerInfo.message;
  const photo = offerInfo.photoURL;
  const photo1 = offerInfo.photoURL1;
  const photo2 = offerInfo.photoURL2;
  const photo3 = offerInfo.photoURL3;
  const photo4 = offerInfo.photoURL4;
  const userId = offerInfo.userId;
  const isbn = offerInfo.bookISBN;
  const binds = {
    message: message,
    photo: photo,
    id: userId,
    isbn: isbn,
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    photo4: photo4,
    msg: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
  };
  console.log(binds);
  const response = await runProcedureWithOutBinds(
    `BEGIN
      CREATE_OFFER(:message, :photo, :id, :isbn, :msg, :photo1, :photo2, :photo3, :photo4);
    END;`,
    binds
  );
  res.status(200).json(response);
}
