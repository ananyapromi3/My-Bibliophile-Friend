import { useState } from "react";
import { useRouter } from "next/router";
import Author from "./author";
import Search from "../pages/bookFriend/books/[userId]";
import styles from "../styles/book.module.css";
// import styles from "../styles/bookGrid.module.css";
// import { Modal } from "bootstrap";
import Modal from "./modal";
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
  // function handleOnChange(changeEvent) {
  //   const reader = new FileReader();
  //   reader.onload = function (onLoadEvent) {
  //     setImageSrc(onLoadEvent.target.result);
  //     setUploadData(undefined);
  //   };
  //   reader.readAsDataURL(changeEvent.target.files[0]);
  // }

  // async function handleOnSubmit(event) {
  //   event.preventDefault();
  //   setUploadFlag(1);
  //   const form = event.currentTarget;
  //   const fileInput = Array.from(form.elements).find(
  //     ({ name }) => name === "file"
  //   );
  //   const formData = new FormData();
  //   for (const file of fileInput.files) {
  //     formData.append("file", file);
  //   }
  //   formData.append("upload_preset", "my-uploads");
  //   const data = await fetch(
  //     "https://api.cloudinary.com/v1_1/dxcudg1mx/image/upload",
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   ).then((r) => r.json());
  //   setOfferInfo((prevState) => ({
  //     bookISBN: prevState.bookISBN,
  //     time: prevState.time,
  //     message: prevState.message,
  //     userId: prevState.userId,
  //     photoURL: data.secure_url,
  //   }));
  //   setUploadData(data);
  //   setImageSrc("");
  //   event.target.reset();
  // }

  // const makeOffer = async () => {
  //   const time = new Date();
  //   setOfferInfo((prevState) => ({
  //     bookISBN: prevState.bookISBN,
  //     time: time,
  //     message: prevState.message,
  //     userId: prevState.userId,
  //     photoURL: prevState.photoURL,
  //   }));
  //   const response = await fetch(`/api/bookFriend/books`, {
  //     method: "POST",
  //     body: JSON.stringify(offerInfo),
  //     headers: {
  //       "Contain-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   if (data.msg == "OFFER CREATED") {
  //     alert("Offer Created");
  //   } else {
  //     alert("Could not create offer");
  //   }
  //   router.push(`/bookFriend/books/${offerInfo.userId}`);
  //   setOfferInfo((prevState) => ({
  //     bookISBN: "",
  //     time: time,
  //     message: "",
  //     userId: prevState.userId,
  //     photoURL: "",
  //   }));
  //   // formToReset.reset();
  // };

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setUploadFlag(0);
  //   e.target.reset();
  // }

  return (
    <div key={book.ISBN} className={styles.bookCard}>
      <img
        className={styles.bookImage}
        src={
          book.COVERPHOTO ||
          "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
        }
        alt="No photo available"
      />

      <h2 className={styles.bookTitle}>{book.TITLE}</h2>
      <p className={styles.bookInfo}>
        <b>ISBN: </b>
        {book.ISBN}
      </p>
      {book.LANGUAGE ? (
        <p className={styles.bookInfo}>
          <b>Language: </b>
          {book.LANGUAGE || "No information"}
        </p>
      ) : (
        <></>
      )}
      {book.GENRE ? (
        <p className={styles.bookInfo}>
          <b>Genre: </b>
          {book.GENRE || "No information"}
        </p>
      ) : (
        <></>
      )}
      {book.PUBLISHERNAME ? (
        <p className={styles.bookInfo}>
          <b>Published by: </b>
          {book.PUBLISHERNAME || "No information"}
        </p>
      ) : (
        <></>
      )}
      {book.PUBLISHYEAR ? (
        <p className={styles.bookInfo}>
          <b>Published in: </b>
          {book.PUBLISHYEAR || "No information"}
        </p>
      ) : (
        <></>
      )}
      {book.SUMMARY == "null" || book.SUMMARY == null ? (
        <></>
      ) : (
        <p className={styles.bookSummary}><b>Summary: </b>{book.SUMMARY}</p>
      )}
      {book.PRICE ? (
        <p className={styles.bookInfo}>
          <b>Price: </b>
          {book.PRICE || "No information"}
        </p>
      ) : (
        <></>
      )}
      {book.AUTHOR[0] ? (
        <div>
          <p className={styles.bookInfo}>
            <b>Written by:</b>
          </p>
          <div className={styles.authorInfo}>
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
      <br/>
      <button className={styles.detailsButton} onClick={() => openModal(book)}>
        Make an Offer
      </button>
      {isModalOpen && (
        <Modal onClose={closeModal} book={book}>
          {/* {selectedBook && (
            <div>
            </div>
          )} */}
        </Modal>
      )}
    </div>
  );
}
