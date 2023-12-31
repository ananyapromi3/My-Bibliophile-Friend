import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/myDelivary.module.css";
import { async } from "regenerator-runtime";
import CustomAlert from "./alert";

export default function MyDelivary({ offer, onStatusChange, onOfferAccepted }) {
  const router = useRouter();
  const exchangeId = offer.EXCHANGEID;
  const delId = router.query.delivaryManId;
  const [offerStatus, setOfferStatus] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleClick = async () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const handleCloseAlert = () => {
      setShowAlert(false);
    };
    const response = await fetch(`/api/delivaryMan/accepted?id=${exchangeId}`);
    setAlertMessage("Offer accepted");
    setShowAlert(true);
    setOfferStatus(0);
    onStatusChange(offer.EXCHANGEID, "Delivered");
    onOfferAccepted(offer.EXCHANGEID);
    router.push(`/delivaryMan/pendingOffers/${delId}`);
  };

  return (
    <>
      {offer && offer.STATUS == "Delivered" ? (
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
            Book exchange between <b>{offer.NAME1}</b> and <b>{offer.NAME2}</b>
          </p>
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>Delivery Charge: </b>
            {offer.FEE}Tk
          </p>
        </div>
      ) : (
        <></>
      )}
      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </>
  );
}
