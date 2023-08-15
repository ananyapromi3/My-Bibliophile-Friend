import { useState } from "react";
import { useRouter } from "next/router";
import Author from "./author";

export default function Book({ book }) {
  const isbn = book.ISBN;
  const router = useRouter();
  const userId = router.query.userId;
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [offerInfo, setOfferInfo] = useState({
    bookISBN: isbn,
    time: new Date(),
    message: "",
    userId: userId,
    photoURL:
      "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png",
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
    const response = await fetch(`/api/bookFriend/bookOffer`, {
      method: "POST",
      body: JSON.stringify(offerInfo),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    const data = await response.json();
  };

  return (
    <div key={book.ISBN}>
      <br />
      <img
        src={
          book.COVERPHOTO ||
          "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
        }
        alt="No photo available"
        width="150"
      />
      <h2>{book.TITLE}</h2>
      <h3>ISBN: {book.ISBN}</h3>
      <h4>Language: {book.LANGUAGE || "No information"}</h4>
      <h4>Genre: {book.GENRE || "No information"}</h4>
      <h4>Published by: {book.PUBLISHERNAME || "No information"}</h4>
      <h4>Published in: {book.PUBLISHYEAR || "No information"}</h4>
      <h4>Summary: {book.SUMMARY || "No information"}</h4>
      <h5>Price: {book.PRICE || "No information"}</h5>
      <h4>Written by:</h4>
      {book.AUTHOR.map((author, index) => {
        return (
          <div key={author.NAME}>
            <Author author={author} />
          </div>
        );
      })}
      <hr />
      <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
        <p>
          <input type="file" name="file" />
        </p>
        <img src={imageSrc} />
        {imageSrc && !uploadData && (
          <p>
            <button>Upload Files</button>
          </p>
        )}
        {uploadData && (
          <code>
            <p>Uploaded</p>
          </code>
        )}
      </form>
      <label>
        Tell about the book:{" "}
        <input
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
      <button
        onClick={makeOffer}
        onChange={(e) =>
          setOfferInfo((prevState) => ({
            bookISBN: book.ISBN,
            time: prevState.time,
            message: prevState.message,
            userId: prevState.userId,
            photoURL: prevState.photoURL,
          }))
        }
      >
        Make offer
      </button>
      <hr />
      <hr />
    </div>
  );
}
