//NPM INSTALL CLOUDINARY/.................

import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

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

  return (
    <div>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image to Cloudinary!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>UPLOAD YOUR BOOK IMAGE</h1>

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
              <pre>{JSON.stringify(uploadData, null, 2)}</pre>
            </code>
          )}
        </form>
      </main>
    </div>
  );
}
