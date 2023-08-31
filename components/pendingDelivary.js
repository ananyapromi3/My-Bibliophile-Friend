import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/pendingDelivary.module.css";
import { async } from "regenerator-runtime";
import { off } from "process";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PendingDelivary({
  offer,
  onStatusChange,
  onOfferAccepted,
}) {
  const router = useRouter();
  const exchangeId = offer.EXCHANGEID;
  const delId = router.query.delivaryManId;
  const [offerStatus, setOfferStatus] = useState(1);

  const handleClick = async () => {
    const response = await fetch(`/api/delivaryMan/accepted?id=${exchangeId}`);
    alert("Offer accepted");
    setOfferStatus(0);
    onStatusChange(offer.EXCHANGEID, "Delivered");
    onOfferAccepted(offer.EXCHANGEID);
    router.push(`/delivaryMan/pendingOffers/${delId}`);
  };

  return (
    <>
      {offer && offer.STATUS == "pending" ? (
        <div
          key={offer.EXCHANGEID}
          className={styles.offerCard}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>Offer ID: </b>
            {exchangeId}
          </p>
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            Book exchange offer between <b>{offer.NAME1}</b> and{" "}
            <b>{offer.NAME2}</b>
          </p>
          {offer.PHN1 ? (
            <p
              className={styles.offerInfo}
              style={{ fontFamily: "Georgia, sans-serif" }}
            >
              <FontAwesomeIcon icon={faPhone} />
              <b> {offer.NAME1.split(" ")[0]} </b>
              {offer.PHN1}
            </p>
          ) : (
            <></>
          )}
          {offer.PHN2 ? (
            <p
              className={styles.offerInfo}
              style={{ fontFamily: "Georgia, sans-serif" }}
            >
              <FontAwesomeIcon icon={faPhone} />
              <b> {offer.NAME2.split(" ")[0]} </b>
              {offer.PHN2}
            </p>
          ) : (
            <></>
          )}
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>Delivery Charge: </b>
            {offer.FEE}Tk
          </p>
          <br />
          <button
            className={styles.acceptButton}
            style={{ fontFamily: "Georgia, sans-serif" }}
            onClick={handleClick}
          >
            Successfully Delivered
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
