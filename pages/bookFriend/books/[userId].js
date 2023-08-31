import { useState } from "react";
import { useRouter } from "next/router";
import Book from "../../../components/book";
import { useEffect } from "react";
import BookFilters from "../../../components/bookFilter";
import styles from "../../../styles/search.module.css";
import Menu from "../../../components/menu";

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

  const activeMenu = "books";

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
    const filteredBooks = searchResults
      .filter((book) => {
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

  // const [offerReqCount, setOfferReqCount] = useState(0);
  // const offerReq = async () => {
  //   try {
  //     const response = await fetch(`/api/bookFriend/offers?term=${userId}`);
  //     const data = await response.json();
  //     setOfferReqCount(data.length);
  //   } catch (error) {
  //     console.error("Error searching:", error);
  //   }
  // };

  // useEffect(() => {
  //   offerReq();
  // }, []);

  useEffect(() => {
    const func = async () => {
      const id = parseInt(userId);
      if (!isNaN(id)) {
        const response1 = await fetch(`/api/notifications?term=${id}`);
        const data1 = await response1.json();
        localStorage.setItem("notificationCount", data1.length);
      }
    };
    func();
  });

  return (
    <>
      <Menu active={activeMenu} />
      <div className={styles.container}>
        <div className={styles.searchBar}>
          <BookFilters
            genres={genres}
            authors={authors}
            handleFilterChange={handleFilterChange}
            handleSortChange={handleFilterChange}
            handleSearchChange={handleSearchChange}
            searchTerm={searchTerm}
            openModal={openModal}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
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
      </div>
    </>
  );
}
