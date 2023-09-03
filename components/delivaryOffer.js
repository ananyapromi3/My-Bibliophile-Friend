import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/delivaryOffer.module.css";
import { async } from "regenerator-runtime";

export default function DelivaryOffer({
  offer,
  onStatusChange,
  onOfferAccepted,
}) {
  const router = useRouter();
  const exchangeId = offer.EXCHANGEID;
  const distance = offer.DISTANCE;
  const delId = router.query.delivaryManId;
  const [offerStatus, setOfferStatus] = useState(1);
  const fee = (distance * 100).toFixed(2);
  const delivaryInfo = {
    delivaryManId: delId,
    exchangeId: exchangeId,
    fee: fee,
  };
  const longi1 = offer.LONGI1;
  const lati1 = offer.LATI1;
  const longi2 = offer.LONGI2;
  const lati2 = offer.LATI2;

  const acceptDelivary = async () => {
    const response = await fetch(`/api/delivaryMan/offers`, {
      method: "POST",
      body: JSON.stringify(delivaryInfo),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (data.msg == "SUCCESSFUL") {
      alert("Offer accepted");
      setOfferStatus(0);
      onStatusChange(offer.EXCHANGEID, "DONE");
      onOfferAccepted(offer.EXCHANGEID);
    } else {
      alert("Could not accept offer");
    }
    router.push(`/delivaryMan/offers/${delId}`);
  };

  const mapHandler = async () => {
    router.push({
      pathname: "http://localhost:3000/mapPage",
      query: { longi1, lati1, longi2, lati2 },
    });
  };

  return (
    <>
      {offer && offer.STATUS == "PENDING" ? (
        <div
          key={offer.EXCHANGEID}
          className={styles.offerCard}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>{offer.NAME1}</b> wants to exchange a book with{" "}
            <b>{offer.NAME2}</b>
          </p>
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>Delivary Fee:</b> {fee}tk
          </p>
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>Distance:</b> {distance.toFixed(5)} km
          </p>
          <br />
          <button
            className={styles.acceptButton}
            style={{ fontFamily: "Georgia, sans-serif" }}
            onClick={acceptDelivary}
          >
            Accept Delivery Offer
          </button>
          <button
            className={styles.acceptButton}
            style={{ fontFamily: "Georgia, sans-serif" }}
            onClick={mapHandler}
          >
            Find Delivery Location
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
