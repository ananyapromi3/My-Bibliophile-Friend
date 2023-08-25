import runProcedureWithOutBinds from "../../../../oracle/procedureOutBinds";
import runQuery from "../../../../oracle/query";
import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function handler(req, res) {
  let bookInfo = req.body;
  bookInfo = JSON.parse(bookInfo);
  const isbn = bookInfo.isbn;
  const title = bookInfo.title;
  const page = bookInfo.page;
  const lan = bookInfo.lan;
  const published = bookInfo.published;
  const price = bookInfo.price;
  const publisher = bookInfo.publisher;
  const summary = bookInfo.summary;
  const genre = bookInfo.genre;
  const author = bookInfo.author;
  const authorType = bookInfo.authorType;
  const binds = {
    isbn: isbn,
    title: title,
    page: page,
    lan: lan,
    published: published,
    price: price,
    publisher: publisher,
    summary: summary,
    genre: genre,
    author: author,
    authorType: authorType,
    msg: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
  };
  console.log(binds);
//   console.log(
//     `DECLARE
//   MS1 VARCHAR2(50);
//   MS2 VARCHAR2(50);
//   MS3 VARCHAR2(50);
// BEGIN
//   ADD_PUBLISHER(:publisher, NULL, MS1);
//   ADD_AUTHOR(:author, NULL, NULL, :authorType, NULL, MS2);
//   ADD_BOOK(:isbn, :title, :page, :lan, :published, :price, :publisher, :summary, :genre, :msg);
//   ADD_BOOK_WRITER(:isbn, :author, MS3);
// END;`,
//     binds
//   );
  const response = await runProcedureWithOutBinds(
    `DECLARE
        MS1 VARCHAR2(50);
        MS2 VARCHAR2(50);
        MS3 VARCHAR2(50);
    BEGIN
        ADD_PUBLISHER(:publisher, NULL, MS1);
        ADD_AUTHOR(:author, NULL, NULL, :authorType, NULL, MS2);
        ADD_BOOK(:isbn, :title, :page, :lan, :published, :price, :publisher, :summary, :genre, :msg);
        ADD_BOOK_WRITER(:isbn, :author, MS3);
    END;`,
    binds
  );
  res.status(200).json(response);
}
