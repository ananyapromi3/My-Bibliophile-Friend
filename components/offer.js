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
    <>
      {offer && offer.STATUS == "offered" ? (
        <div
          key={offer.OFFERID}
          className={styles.offerCard}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          {offerStatus ? (
            <div>
              <img
                className={styles.offerImage}
                src={offer.BOOKCONDITIONPHOTO}
                style={{ fontFamily: "Georgia, sans-serif" }}
                alt="No photo available"
              />
              <br />
              <p
                className={styles.offerInfo}
                style={{ fontFamily: "Georgia, sans-serif" }}
              >
                {offer.MESSAGE}
              </p>
              <p
                className={styles.offerInfo}
                style={{ fontFamily: "Georgia, sans-serif" }}
              >
                <b>Distance:</b> {offer.DISTANCE.toFixed(5)} km
              </p>
              <p
                className={styles.offerInfo}
                style={{ fontFamily: "Georgia, sans-serif" }}
              >
                <b>Time:</b> {offer.TIME}
              </p>
              <p
                className={styles.offerInfo}
                style={{ fontFamily: "Georgia, sans-serif" }}
              >
                <b>Offered by:</b> {offer.NAME}
              </p>
              <br />
            </div>
          ) : (
            <></>
          )}
          <button
            className={styles.acceptButton}
            onClick={makeNotification}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            Accept offer
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
