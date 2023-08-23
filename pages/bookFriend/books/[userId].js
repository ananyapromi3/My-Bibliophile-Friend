import { useState } from "react";
import { useRouter } from "next/router";
import Book from "../../../components/book";
import { useEffect } from "react";
import BookFilters from "../../../components/bookFilter";

export default function Search() {
  const router = useRouter();
  const [initialSearchResults, setInitialSearchResults] = useState([]);
  const userId = router.query.userId;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    genre: "",
    author: "",
    sort: "title",
  });
  function inArray(name, arr) {
    var count = arr.length;
    for (var i = 0; i < count; i++) {
      if (arr[i].NAME === name) {
        return true;
      }
    }
    return false;
  }
  useEffect(() => {
    // Filter and sort books based on selected filters
    const filteredBooks = searchResults
      .filter((book) => {
        // console.log(book.AUTHOR);
        return (
          (!selectedFilters.genre || book.GENRE === selectedFilters.genre) &&
          (!selectedFilters.author ||
            inArray(selectedFilters.author, book.AUTHOR))
        );
      })
      .sort((a, b) => {
        if (selectedFilters.sort === "year") {
          return a.PUBLISHYEAR - b.PUBLISHYEAR;
        } else {
          return a.TITLE.localeCompare(b.TITLE);
        }
      });
    setFilteredResults(filteredBooks);
  }, [searchResults, selectedFilters]);
  const handleFilterChange = (event) => {
    setSelectedFilters({
      ...selectedFilters,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/books?term=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);
  // useEffect(() => {
  //   const filteredResults = searchResults.filter((book) =>
  //     book.TITLE.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setSearchResults(filteredResults);
  // }, [searchTerm, searchResults]);
  useEffect(() => {
    const filteredResults = initialSearchResults.filter((book) =>
      book.TITLE.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchTerm, initialSearchResults]);
  // useEffect(()=>{handleSearchChange();})
  useEffect(() => {
    const fetchGenresAndAuthors = async () => {
      try {
        const response = await fetch(`/api/genresAndAuthors`);
        const data = await response.json();
        setGenres(data.genres);
        setAuthors(data.authors);
      } catch (error) {
        console.error("Error fetching genres and authors:", error);
      }
    };
    fetchGenresAndAuthors();
  }, []);

  return (
    <div>
      <h1>Book List Search for {userId}</h1>
      <BookFilters
        genres={genres}
        authors={authors}
        handleFilterChange={handleFilterChange}
        handleSortChange={handleFilterChange}
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      />
      <br />
      {/* <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
      {/* <button onClick={handleSearch}>Search</button> */}
      {filteredResults.map((book, index) => {
        return (
          <div key={book.ISBN}>
            <Book book={book} />
          </div>
        );
      })}
    </div>
  );
}
