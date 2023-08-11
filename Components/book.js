export default function Book({ book }) {
  return (
    <div key={book.ISBN}>
      <br />
      <img
        src={
          book.COVERPHOTO ||
          "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
        }
        alt="No photo available"
        width="150"
      />
      <h2>{book.TITLE}</h2>
      <h3>ISBN: {book.ISBN}</h3>
      <h4>Language: {book.LANGUAGE || "No information"}</h4>
      <h4>Genre: {book.GENRE || "No information"}</h4>
      <h4>Published by: {book.PUBLISHERNAME || "No information"}</h4>
      <h4>Published in: {book.PUBLISHYEAR || "No information"}</h4>
      <h4>Summary: {book.SUMMARY || "No information"}</h4>
      <h5>Price: {book.PRICE || "No information"}</h5>
      <hr />
    </div>
  );
}
