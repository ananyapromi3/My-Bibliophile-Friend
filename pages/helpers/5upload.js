import { useState } from "react";

export default function Home() {
  const [uploadDataArray, setUploadDataArray] = useState([]);

  async function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = form.elements.file;
    if (fileInput.files.length > 5) {
      alert("You can upload a maximum of 5 photos.");
      return;
    }
    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "my-uploads");
    const promises = Array.from(fileInput.files).map(async (file, index) => {
      const formData = new FormData(); // Create a new instance of FormData for each file
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
    // console.log(data);
    const uploadResponses = await Promise.all(promises);
    setUploadDataArray(uploadResponses);
    console.log(uploadResponses);
  }

  return (
    <div>
      <main>
        <h1>UPLOAD YOUR BOOK IMAGES</h1>
        <form method="post" onSubmit={handleOnSubmit}>
          <p>
            <input type="file" name="file" multiple />
          </p>

          {uploadDataArray.map((data, index) => (
            <div key={index}>
              <code>
                <pre>{JSON.stringify(data.secure_url)}</pre>
              </code>
            </div>
          ))}

          <p>
            <button>Upload Files</button>
          </p>
        </form>
      </main>
    </div>
  );
}
