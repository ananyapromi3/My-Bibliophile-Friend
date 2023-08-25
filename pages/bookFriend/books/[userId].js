import { useState } from "react";
import { useRouter } from "next/router";
import Book from "../../../components/book";
import { useEffect } from "react";
import BookFilters from "../../../components/bookFilter";
import styles from "../../../styles/search.module.css";
import Modal from "../../../components/modalAddBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
  useEffect(() => {
    const filteredResults = initialSearchResults.filter((book) =>
      book.TITLE.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchTerm, initialSearchResults]);
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

  const handleLogOut = () => {
    localStorage.removeItem("token");
    router.push("http://localhost:3000");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("http://localhost:3000");
    }
  });

  return (
    <div>
      {/* <h1>Book List Search for {userId}</h1> */}
      <button onClick={handleLogOut}>Log Out {"  "}
        <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
      </button>
      <div>
        <BookFilters
          genres={genres}
          authors={authors}
          handleFilterChange={handleFilterChange}
          handleSortChange={handleFilterChange}
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
        />
      </div>
      <div className={styles.bookGrid}>
        {filteredResults.map((book, index) => {
          return (
            <div key={book.ISBN} className={styles.bookCard}>
              <Book book={book} />
            </div>
          );
        })}
      </div>
      <button onClick={openModal}>Add Book</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {/* Your form to add a book */}
          {/* Include form fields for book information */}
          {/* Include a submit button */}
        </Modal>
      )}
    </div>
  );
}
