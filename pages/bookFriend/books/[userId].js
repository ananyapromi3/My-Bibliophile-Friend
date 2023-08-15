import { useState } from "react";
import { useRouter } from "next/router";
import Book from "../../../components/book";

export default function Search() {
  const router = useRouter();
  const userId = router.query.userId;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/books?term=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div>
      <h1>Book List Search for {userId}</h1>
      <br />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
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
