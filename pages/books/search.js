import { useState } from "react";
import Book from "../../components/book";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/test?term=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
      // console.log(typeof data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div>
      <h1>Book List Search</h1>
      <br />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {/* <ul>
        {searchResults.map((result, index) => (
          <li key={result.ISBN}>{result.TITLE} {result.LANGUAGE}</li>
        ))}
      </ul> */}
      {searchResults.map((book, index) => {
        return (
          <div key={book.ISBN}>
            <Book book={book} />
          </div>
        );
      })}
    </div>
  );
}
