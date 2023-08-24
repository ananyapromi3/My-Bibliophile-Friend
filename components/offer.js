import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/offer.module.css";
import { off } from "process";

export default function Offer({ offer, onStatusChange, onOfferAccepted }) {
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
      onStatusChange(offer.OFFERID, "accepted");
      onOfferAccepted(offer.OFFERID);
    } else {
      alert("Could not accept offer");
    }
    router.push(`/bookFriend/offersFeed/${userId}`);
  };

  return (
    <div>
      {offer && offer.STATUS == "offered" ? (
        <div key={offer.OFFERID} className={styles.offerCard}>
          {offerStatus ? (
            <div>
              <img
                className={styles.offerImage}
                src={
                  offer.BOOKCONDITIONPHOTO ||
                  "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
                }
                alt="No photo available"
                width="150"
              />
              <br />
              <p className={styles.offerInfo}>{offer.MESSAGE}</p>
              <p className={styles.offerInfo}>
                <b>Distance:</b> {offer.DISTANCE}
              </p>
              <p className={styles.offerInfo}>
                <b>Time:</b> {offer.TIME}
              </p>
              <p className={styles.offerInfo}>
                <b>Offered by:</b> {offer.NAME}
              </p>
              <br />
              {offer.STATUS == "offered" && (
                <button
                  className={styles.acceptButton}
                  onClick={makeNotification}
                >
                  Accept offer
                </button>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
