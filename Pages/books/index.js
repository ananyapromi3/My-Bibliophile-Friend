import runQuery from "../../oracle/query";
import Book from "../../components/book";

export default function BooksInfo({ books }) {
  return (
    <div>
      <h1>List of Books</h1>
      <hr/>
      <br/>
      {books.map((book) => {
        return (
          <div key={book.ISBN}>
            <Book book={book} />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await runQuery(`SELECT * FROM BOOK ORDER BY BOOK.TITLE ASC`);
  return {
    props: {
      books: response.rows,
    },
  };
}
