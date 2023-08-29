import React from "react";
import styles from "../styles/modal.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Modal({ children, onClose, book }) {
  const [isModalOpen, setIsModalOpen] = useState(false); 
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
    photoURL: "https://wallpapercave.com/wp/wp11160729.jpg",
  });

  function handleOnChange(changeEvent) {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    setUploadFlag(1);
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "my-uploads");
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dxcudg1mx/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    setOfferInfo((prevState) => ({
      bookISBN: prevState.bookISBN,
      time: prevState.time,
      message: prevState.message,
      userId: prevState.userId,
      photoURL: data.secure_url,
    }));
    setUploadData(data);
    setImageSrc("");
    event.target.reset();
  }

  const makeOffer = async () => {
    const time = new Date();
    setOfferInfo((prevState) => ({
      bookISBN: prevState.bookISBN,
      time: time,
      message: prevState.message,
      userId: prevState.userId,
      photoURL: prevState.photoURL,
    }));
    const response = await fetch(`/api/bookFriend/books`, {
      method: "POST",
      body: JSON.stringify(offerInfo),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
    if (data.msg == "OFFER CREATED") {
      alert("Offer Created");
    } else {
      alert("Could not create offer");
    }
    onClose();
    router.push(`/bookFriend/books/${offerInfo.userId}`);
    setOfferInfo((prevState) => ({
      bookISBN: "",
      time: time,
      message: "",
      userId: prevState.userId,
      photoURL: "",
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setUploadFlag(0);
    e.target.reset();
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
        <form
          method="post"
          className={styles.modalForm}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        >
          <p className={styles.modalText}>
            Upload your book's photo
            <input type="file" name="file" />
          </p>
          <img className={styles.modalImage} src={imageSrc} />
          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}
          {uploadData && uploadFlag ? <p>Uploaded</p> : <></>}
        </form>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <label className={styles.modalText}>
            Tell something about the book you want to share:{" "}
            <input
              placeholder="Write here..."
              onChange={(e) =>
                setOfferInfo((prevState) => ({
                  bookISBN: prevState.bookISBN,
                  time: prevState.time,
                  message: e.target.value,
                  userId: prevState.userId,
                  photoURL: prevState.photoURL,
                }))
              }
            />
          </label>
          <button onClick={makeOffer}>Make offer</button>
        </form>
      </div>
    </div>
  );
}

// export default Modal;
