import { useState } from "react";
import { useRouter } from "next/router";

export default function Offer({ offer }) {
  const router = useRouter();
  const offerId = offer.OFFERID;
  const userId = router.query.userId;
  const [offerStatus, setOfferStatus] = useState(1);
  const notiInfo = {
    userId: userId,
    offerId: offerId,
  };
  const makeNotification = async () => {
    const response = await fetch(`/api/bookFriend/offersFeed`, {
      method: "POST",
      body: JSON.stringify(notiInfo),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (data.msg == "NOTIFICATION1 SENT") {
      alert("Offer accepted");
      setOfferStatus(0);
    } else {
      alert("Could not accept offer");
    }
    router.push(`/bookFriend/offersFeed/${userId}`);
  };

  return (
    <div key={offer.OFFERID}>
      {offerStatus ? (
        <div>
          <img
            src={
              offer.BOOKCONDITIONPHOTO ||
              "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
            }
            alt="No photo available"
            width="150"
          />
          <br />
          <br />
          <h4>{offer.MESSAGE}</h4>
          <p>Distance: {offer.DISTANCE}</p>
          <p>Time: {offer.TIME}</p>
          <p>Offered by: {offer.NAME}</p>
          {
            (offer.STATUS = "offered" && (
              <button onClick={makeNotification}>Accept offer</button>
            ))
          }
          <hr />
          <hr />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
