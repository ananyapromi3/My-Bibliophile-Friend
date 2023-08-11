// import runQuery from "../../dbGenerate/query";
const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default function BooksInfo({ books }) {
  return (
    <div>
      <h1>List of Books</h1>
      {books.map((book) => {
        return (
          <div key={book.ISBN}>
            <h2>{book.TITLE}</h2>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "project",
      password: "12345",
      connectString: "localhost/orclpdb",
    });
    // const response = await connection.execute(query);
    const response = await connection.execute(`SELECT ISBN, TITLE FROM BOOK`);
    const data = await response.json();
    return {
      props: {
        books: data,
      },
    };
  } catch (err) {
    console.log(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.log(err);
      }
    }
  }
}
