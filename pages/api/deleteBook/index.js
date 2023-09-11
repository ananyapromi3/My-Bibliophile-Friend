import runProcedureWithOutBinds from "../../../oracle/procedureOutBinds";
import runQuery from "../../../oracle/query";
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function handler(req, res) {
  let book = req.body;
  book = JSON.parse(book);
  // console.log(notiInfo);
  const isbn = book.isbn;
  //   const offerId = notiInfo.offerId;
  const binds = {
    isbn: isbn,
    msg: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
  };
  // console.log(binds);
  const response = await runProcedureWithOutBinds(
    `DECLARE
    BEGIN
        DELETE_BOOK(:isbn, :msg);
    END;`,
    binds
  );
  res.status(200).json(response);
}
