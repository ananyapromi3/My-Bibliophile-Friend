import { useState } from "react";
import { useRouter } from "next/router";
import Book from "../../../components/book";

export default function Search() {
  const router = useRouter();
  const userId = router.query.userId;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [offerInfo, setOfferInfo] = useState({
    bookISBN: "",
    time: "",
    message: "",
    userId: "",
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
    console.log(data.secure_url);
    setImageSrc(data.secure_url);
    setUploadData(data);
  }

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/books?term=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
      //   console.log(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const makeOffer = async () => {};
  return (
    <div>
      <h1>Book List Search for {userId}</h1>
      <br />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((book, index) => {
        return (
          <div key={book.ISBN}>
            <Book book={book} />
          </div>
        );
      })}
    </div>
  );
}
