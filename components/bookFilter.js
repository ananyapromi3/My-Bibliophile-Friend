// components/BookFilters.js
import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";
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
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select onChange={handleFilterChange} name="genre">
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select onChange={handleFilterChange} name="author">
        <option value="">All Authors</option>
        {authors.map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>
      <select onChange={handleSortChange} name="sort">
        <option value="title">Sort by Title</option>
        <option value="year">Sort by Year</option>
      </select>
    </div>
  );
}

// export default BookFilters;
