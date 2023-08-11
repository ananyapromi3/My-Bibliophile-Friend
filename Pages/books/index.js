import runQuery from "../../dbGenerate/query";
// const oracledb = require("oracledb");
// oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default function BooksInfo({ books }) {
  return (
    <div>
      <h1>List of Books</h1>
      <h2>{books}</h2>
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
  // let connection;
  // try {
  //   connection = await oracledb.getConnection({
  //     user: "project",
  //     password: "12345",
  //     connectString: "localhost/orclpdb",
  //   });
  const response = await runQuery(
    `SELECT ISBN, TITLE FROM BOOK`
  );
  // console.log(response);
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  // console.log(response);
  //   const response = await connection.execute(`SELECT ISBN, TITLE FROM BOOK`);
  // const data = await response.json();
  const data = JSON.stringify(response);
  // } catch (err) {
  //   console.log(err);
  // } finally {
  //   if (connection) {
  //     try {
  //       await connection.close();
  //     } catch (err) {
  //       console.log(err);
  //     }
  // }
  // }
  return {
    props: {
      books: data,
    },
  };
}
