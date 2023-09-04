import React from "react";
import styles from "../styles/modal.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomAlert from "./alert";
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export default function Modal({ children, onClose, book }) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const isbn = book.ISBN;
  const router = useRouter();
  const userId = router.query.userId;
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [uploadFlag, setUploadFlag] = useState(0);
  const [uploadDataArray, setUploadDataArray] = useState([]);
  const [offerInfo, setOfferInfo] = useState({
    bookISBN: isbn,
    time: new Date(),
    message: "",
    userId: userId,
    photoURL: "https://wallpapercave.com/wp/wp11160729.jpg",
    photoURL1: "",
    photoURL2: "",
    photoURL3: "",
    photoURL4: "",
  });

  function handleOnChange(changeEvent) {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  const [photoCount, setPhotoCount] = useState(0);

  async function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = form.elements.file;
    setPhotoCount(fileInput.files.length);
    if (fileInput.files.length > 5) {
      setAlertMessage("You can upload a maximum of 5 photos.");
      setShowAlert(true);
      return;
    }
    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "my-uploads");
    const promises = Array.from(fileInput.files).map(async (file, index) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "my-uploads");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxcudg1mx/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data;
    });
    const uploadResponses = await Promise.all(promises);
    setOfferInfo((prevState) => ({
      bookISBN: prevState.bookISBN,
      time: prevState.time,
      message: prevState.message,
      userId: prevState.userId,
      photoURL: uploadResponses[0] ? uploadResponses[0].secure_url : "",
      photoURL1: uploadResponses[1] ? uploadResponses[1].secure_url : "",
      photoURL2: uploadResponses[2] ? uploadResponses[2].secure_url : "",
      photoURL3: uploadResponses[3] ? uploadResponses[3].secure_url : "",
      photoURL4: uploadResponses[4] ? uploadResponses[4].secure_url : "",
    }));
    setUploadDataArray(uploadResponses);
    setUploadFlag(1);
    setUploadData(uploadResponses[0]);
  }

  const makeOffer = async () => {
    const time = new Date();
    setOfferInfo((prevState) => ({
      bookISBN: prevState.bookISBN,
      time: time,
      message: prevState.message,
      userId: prevState.userId,
      photoURL: prevState.photoURL,
      photoURL1: prevState.photoURL1,
      photoURL2: prevState.photoURL2,
      photoURL3: prevState.photoURL3,
      photoURL4: prevState.photoURL4,
    }));
    if (photoCount > 0) {
      const response = await fetch(`/api/bookFriend/books`, {
        method: "POST",
        body: JSON.stringify(offerInfo),
        headers: {
          "Contain-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.msg == "OFFER CREATED") {
        showToast("Offer successfully created");
        setAlertMessage("Offer Created");
        setAlertMessage(true);
      } else {
        setAlertMessage("Could not create offer");
        setAlertMessage(true);
        showToastErr("Could not create offer");
      }
    } else {
      setAlertMessage("You must upload atleast one photo");
      setShowAlert(true);
      return;
    }
    onClose();
    router.push(`/bookFriend/books/${offerInfo.userId}`);
    setOfferInfo((prevState) => ({
      bookISBN: "",
      time: time,
      message: "",
      userId: prevState.userId,
      photoURL: "",
      photoURL1: "",
      photoURL2: "",
      photoURL3: "",
      photoURL4: "",
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setUploadFlag(0);
    e.target.reset();
  }
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
    <div
      className={styles.modalBackdrop}
      style={{ fontFamily: "Georgia, sans-serif" }}
    >
      <div
        className={styles.modalContent}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <form
          style={{ fontFamily: "Georgia, sans-serif" }}
          method="post"
          className={styles.modalForm}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        >
          <p
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.modalText}
          >
            Upload your book's photo
            <br />
            You can upload atmost five photos. You must upload atleast one.
          </p>
          <input
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="file"
            name="file"
            multiple
            className={styles.input}
          />
          {imageSrc && !uploadData && (
            <button
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.buttonSmall}
            >
              Upload Files
            </button>
          )}
          {uploadData && uploadFlag ? <p>Uploaded</p> : <></>}
        </form>
        <form
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.modalForm}
          onSubmit={handleSubmit}
        >
          <p
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.modalText}
          >
            Tell something about the book you want to share:{" "}
          </p>
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            placeholder="Write here..."
            onChange={(e) =>
              setOfferInfo((prevState) => ({
                bookISBN: prevState.bookISBN,
                time: prevState.time,
                message: e.target.value,
                userId: prevState.userId,
                photoURL: prevState.photoURL,
                photoURL1: prevState.photoURL1,
                photoURL2: prevState.photoURL2,
                photoURL3: prevState.photoURL3,
                photoURL4: prevState.photoURL4,
              }))
            }
          />
          <button
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.button}
            onClick={makeOffer}
          >
            Create offer
          </button>
        </form>
      </div>
      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </div>
  );
}
