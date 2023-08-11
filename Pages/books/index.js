import runQuery from "../../dbGenerate/query";

export default function BooksInfo({ books }) {
  return (
    <div>
      <h1>List of Books</h1>
      {books.map((book) => {
        return (
          <div key={book.ISBN}>
            <img src={book.COVERPHOTO} alt="No photo available" width="100" />
            <h4>{book.TITLE}</h4>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await runQuery(`SELECT * FROM BOOK`);
  return {
    props: {
      books: response.rows,
    },
  };
}
