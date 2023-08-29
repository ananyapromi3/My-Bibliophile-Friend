import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/modal.module.css";

export default function Modal({ children, onClose }) {
  const router = useRouter();
  const userId = router.query.userId;
  const [bookInfo, setBookInfo] = useState({
    isbn: "",
    title: "",
    page: "",
    lan: "",
    published: "",
    price: "",
    publisher: "",
    summary: "",
    genre: "",
    author: "",
    authorType: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/bookFriend/createBook`, {
      method: "POST",
      body: JSON.stringify(bookInfo),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (data.msg == "ADDED") {
      alert("Book Added");
    } else {
      alert("Could not add this book");
    }
    onClose();
    router.push(`/bookFriend/books/${userId}`);
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={bookInfo.isbn || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={bookInfo.title || ""}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="page"
            placeholder="Page Count"
            value={bookInfo.page}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lan"
            placeholder="Language"
            value={bookInfo.lan || ""}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="published"
            placeholder="Published in (year)"
            value={bookInfo.published}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Market price (BDT)"
            value={bookInfo.price}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="publisher"
            placeholder="Publisher"
            value={bookInfo.publisher || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="summary"
            placeholder="What is the book about?"
            value={bookInfo.summary || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={bookInfo.genre || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author name"
            value={bookInfo.author || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="authorType"
            placeholder="Author Type"
            value={bookInfo.authorType || ""}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}
