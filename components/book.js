import { useState } from "react";
import { useRouter } from "next/router";
import Author from "./author";
import Search from "../pages/bookFriend/books/[userId]";
import styles from "../styles/book.module.css";
// import styles from "../styles/bookGrid.module.css";
// import { Modal } from "bootstrap";
import Modal from "./modal";
import YesNoAlert from "./yesNoAlert";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Book({ book }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal
  const [selectedBook, setSelectedBook] = useState(null);
  const isbn = book.ISBN;
  const router = useRouter();
  const userId = router.query.userId;
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [uploadFlag, setUploadFlag] = useState(0);
  const [offerInfo, setOfferInfo] = useState({
    bookISBN: isbn,
    time: new Date(),
    message: "",
    userId: userId,
    photoURL:
      "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png",
  });
  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  const [showYesNo, setYesNo] = useState(false);
  const [yesNoMessage, setYesNoMessage] = useState("");
  const [cont, setCont] = useState(false);
  const no = () => {
    setCont(false);
    setYesNo(false);
  };
  const yes = () => {
    setCont(true);
    setYesNo(false);
    deleteBook();
  };
  const helper = async () => {
    setYesNoMessage("Are you sure you want to delete this book?");
    setYesNo(true);
  };
  const delBook = {
    isbn: book.ISBN,
  };

  const deleteBook = async () => {
    const response = await fetch(`/api/deleteBook`, {
      method: "POST",
      body: JSON.stringify(delBook),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.msg == "DELETED") {
      // alert("This book has been deleted");
      // setAlertMessage("Offer deleted");
      // setShowAlert(true);
      showToast("Book successfully deleted");
      // handleLogOut();
      // setOfferStatus(0);
      // onStatusChange(offer.OFFERID, "accepted");
      // onOfferAccepted(offer.OFFERID);
    } else {
      // alert("Account could not be deleted");
      // setAlertMessage("Could not delete your account");
      // setShowAlert(true);
      showToastErr("This book could not be deleted");
    }
    // router.push(`/bookFriend/myOffers/${userId}`);
    router.reload();
  };

  const showToast = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };
  const showToastErr = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };

  return (
    <div key={book.ISBN} className={styles.bookCard}>
      <img
        className={styles.bookImage}
        src={
          book.COVERPHOTO ||
          "https://songofamerica.net/wp-content/uploads/2017/09/Missing-book-cover.jpg"
        }
        alt="No photo available"
        style={{ fontFamily: "Georgia, sans-serif" }}
      />
      <br />
      <h2
        className={styles.bookTitle}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        {book.TITLE}
      </h2>
      <p
        className={styles.bookISBN}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <b>ISBN: </b>
        {book.ISBN}
      </p>
      {book.LANGUAGE ? (
        <p
          className={styles.bookInfo}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <b>Language: </b>
          {book.LANGUAGE || "No information"}
        </p>
      ) : (
        <></>
      )}
      {book.GENRE ? (
        <p
          className={styles.bookInfo}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <b>Genre: </b>
          {book.GENRE || "No information"}
        </p>
      ) : (
        <></>
      )}
      {book.PUBLISHERNAME ? (
        <p
          className={styles.bookInfo}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <b>Published by: </b>
          {book.PUBLISHERNAME || "No information"}
        </p>
      ) : (
        <></>
      )}
      {book.PUBLISHYEAR ? (
        <p
          className={styles.bookInfo}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <b>Published in: </b>
          {book.PUBLISHYEAR || "No information"}
        </p>
      ) : (
        <></>
      )}
      {book.SUMMARY == "null" || book.SUMMARY == null ? (
        <></>
      ) : (
        <p
          className={styles.bookSummary}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <b>Summary: </b>
          {book.SUMMARY}
        </p>
      )}
      {book.PRICE ? (
        <p
          className={styles.bookInfo}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <b>Market Price: </b>
          {book.PRICE || "No information"}BDT
        </p>
      ) : (
        <></>
      )}
      {book.AUTHOR[0] ? (
        <div>
          <p
            className={styles.bookInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>Written by:</b>
          </p>
          <div
            className={styles.authorInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            {book.AUTHOR.map((author, index) => {
              return (
                <div key={author.NAME}>
                  <Author author={author} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
      <br />
      <button
        style={{ fontFamily: "Georgia, sans-serif" }}
        className={styles.detailsButton}
        onClick={() => openModal(book)}
      >
        Click Here to share this book
      </button>
      {/* <button
        style={{ fontFamily: "Georgia, sans-serif" }}
        className={styles.delButton}
        onClick={helper}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button> */}
      {isModalOpen && <Modal onClose={closeModal} book={book}></Modal>}
      {showYesNo && <YesNoAlert message={yesNoMessage} onYes={yes} onNo={no} />}
    </div>
  );
}
