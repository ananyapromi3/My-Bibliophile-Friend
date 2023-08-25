// components/BookFilters.js
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import styles from "../styles/bookFilter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faUndo } from "@fortawesome/free-solid-svg-icons";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faPlay, faStop, faUndo } from '@fontawesome/free-solid-svg-icons';

// Add the imported icons to the library
// library.add(faPlay, faStop, faUndo);

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
export default function BookFilters({
  genres,
  authors,
  handleFilterChange,
  handleSortChange,
  handleSearchChange,
  searchTerm,
}) {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  // console.log(transcript);
  useEffect(() => {
    handleSearchChange({ target: { value: transcript } });
  }, [transcript]);

  return (
    <div className={styles.filterContainer}>
      {/* <h2 className={styles.filterHeading}>Filter Books</h2> */}
      <div className={styles.filterOption}>
        <p className={styles.filterLabel}>
          <b>Microphone:</b> {listening ? "on" : "off"}{" "}
        </p>
        {/* <button onClick={voice}></button> */}
        <button
          className={styles.filterButton}
          onClick={SpeechRecognition.startListening}
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button
          className={styles.filterButton}
          onClick={SpeechRecognition.stopListening}
        >
          <FontAwesomeIcon icon={faStop} />
        </button>
        <button className={styles.filterButton} onClick={resetTranscript}>
          <FontAwesomeIcon icon={faUndo} />
        </button>
        <input
          type="text"
          placeholder="Voice search by title..."
          value={transcript}
          onChange={handleSearchChange}
          className={styles.filterSearchBox}
          disabled
        />
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.filterSearchBox}
        />
        {/* <label className={styles.filterLabel}>Select Genre:</label> */}
        <select
          className={styles.filterSelect}
          onChange={handleFilterChange}
          name="genre"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <select
          onChange={handleFilterChange}
          className={styles.filterSelect}
          name="author"
        >
          <option value="">All Authors</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
        <select
          className={styles.filterSelect}
          onChange={handleSortChange}
          name="sort"
        >
          <option value="title">Sort by Title</option>
          <option value="year">Sort by Year</option>
        </select>
      </div>
      {/* <button className={styles.filterButton} onClick={handleFilterSubmit}>
        Apply Filters
      </button> */}
    </div>
  );
}

// export default BookFilters;
