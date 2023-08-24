// components/BookFilters.js
import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/bookFilter.module.css";
export default function BookFilters({
  genres,
  authors,
  handleFilterChange,
  handleSortChange,
  handleSearchChange,
  searchTerm,
}) {
  // const BookFilters = ({
  //   genres,
  //   authors,
  //   handleFilterChange,
  //   handleSortChange,
  //   handleSearchChange,
  //   searchTerm,
  // }) => {
  return (
    <div className={styles.filterContainer}>
      {/* <h2 className={styles.filterHeading}>Filter Books</h2> */}
      <div className={styles.filterOption}>
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
