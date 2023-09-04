import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/modalAddBook.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import CustomAlert from "./alert";
import { toast } from "react-toastify";

export default function Modal({ children, onClose }) {
  const showToast = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };
  const showToastError = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };
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
      showToast("Book Added");
      setAlertMessage("Book Added");
      setShowAlert(true);
      onClose();
      router.push(`/bookFriend/books/${userId}`);
    } else {
      setAlertMessage("Could not add this book");
      // showToastError("Could not add this book");
      setShowAlert(true);
    }
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div
      className={styles.modalBackdrop}
      style={{ fontFamily: "Georgia, sans-serif" }}
    >
      <div
        className={styles.modalContent}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <button
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.closeButton}
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <form
          onSubmit={handleSubmit}
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.modalForm}
        >
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={bookInfo.isbn || ""}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="text"
            name="title"
            placeholder="Title"
            value={bookInfo.title || ""}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="number"
            name="page"
            placeholder="Page Count"
            value={bookInfo.page}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="text"
            name="lan"
            placeholder="Language"
            value={bookInfo.lan || ""}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="number"
            name="published"
            placeholder="Published in (year)"
            value={bookInfo.published}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="number"
            name="price"
            placeholder="Market price (BDT)"
            value={bookInfo.price}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="text"
            name="publisher"
            placeholder="Publisher"
            value={bookInfo.publisher || ""}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="text"
            name="summary"
            placeholder="What is the book about?"
            value={bookInfo.summary || ""}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="text"
            name="genre"
            placeholder="Genre"
            value={bookInfo.genre || ""}
            onChange={handleInputChange}
          />
          <input
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.input}
            type="text"
            name="author"
            placeholder="Author name"
            value={bookInfo.author || ""}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="text"
            name="authorType"
            placeholder="Author Type"
            value={bookInfo.authorType || ""}
            onChange={handleInputChange}
          />
          <br />
          <button
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.button}
            type="submit"
          >
            Add Book
          </button>
        </form>
      </div>
      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </div>
  );
}
