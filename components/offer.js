import { useState } from "react";
import { useRouter } from "next/router";

export default function Offer({ offer }) {
  return (
    <div key={offer.OFFERID}>
      <img
        src={
          offer.BOOKCONDITIONPHOTO ||
          "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
        }
        alt="No photo available"
        width="150"
      />
      <h2>{offer.MESSAGE}</h2>
      <h3>Time: {offer.TIME}</h3>
      <button>Accept offer</button>
      <hr />
      <hr />
    </div>
  );
}
