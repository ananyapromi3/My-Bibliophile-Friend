// components/BookFilters.js
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import styles from "../styles/bookFilter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faUndo } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/modalAddBook";

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
  openModal,
  closeModal,
  isModalOpen,
}) {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  useEffect(() => {
    handleSearchChange({ target: { value: transcript } });
  }, [transcript]);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterOption}>
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
          style={{ fontFamily: "Georgia, sans-serif" }}
        />
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.filterSearchBox}
          style={{ fontFamily: "Georgia, sans-serif" }}
        />
        <select
          className={styles.filterSelect}
          onChange={handleFilterChange}
          name="genre"
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <option style={{ fontFamily: "Georgia, sans-serif" }} value="">
            All Genres
          </option>
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
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <option value="" style={{ fontFamily: "Georgia, sans-serif" }}>
            All Authors
          </option>
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
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <option style={{ fontFamily: "Georgia, sans-serif" }} value="title">
            Sort by Title
          </option>
          <option style={{ fontFamily: "Georgia, sans-serif" }} value="year">
            Sort by Year
          </option>
        </select>
        <button
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.detailsButton}
          onClick={openModal}
        >
          Add Book
        </button>
        {isModalOpen && <Modal onClose={closeModal}></Modal>}
      </div>
    </div>
  );
}
