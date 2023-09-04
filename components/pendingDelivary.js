import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/pendingDelivary.module.css";
import { async } from "regenerator-runtime";
import { off } from "process";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomAlert from "./alert";
import { toast } from "react-toastify";

export default function PendingDelivary({
  offer,
  onStatusChange,
  onOfferAccepted,
}) {
  const router = useRouter();
  const exchangeId = offer.EXCHANGEID;
  const delId = router.query.delivaryManId;
  const [offerStatus, setOfferStatus] = useState(1);

  const longi1 = offer.LONGI1;
  const lati1 = offer.LATI1;
  const longi2 = offer.LONGI2;
  const lati2 = offer.LATI2;
  const showToast = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };
  const showToastError = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };

  const handleClick = async () => {
    const response = await fetch(`/api/delivaryMan/accepted?id=${exchangeId}`);
    // setAlertMessage("Offer accepted");
    // setShowAlert(true);

    const id = parseInt(delId);
    if (!isNaN(id)) {
      const response1 = await fetch(`/api/delivaryAcceptedOffers?id=${delId}`);
      const data1 = await response1.json();
      localStorage.setItem("pendingDelCount", data1.length);
    }
    showToast("Offer marked as delivered");
    setOfferStatus(0);
    onStatusChange(offer.EXCHANGEID, "Delivered");
    onOfferAccepted(offer.EXCHANGEID);
    router.push(`/delivaryMan/pendingOffers/${delId}`);
  };

  const mapHandler = async () => {
    router.push({
      pathname: "http://localhost:3000/mapPage",
      query: { longi1, lati1, longi2, lati2 },
    });
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleCloseAlert = () => {
    setShowAlert(false);
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
            onClick={mapHandler}
          >
            Find Delivery Location
          </button>
          <button
            className={styles.acceptButton}
            style={{ fontFamily: "Georgia, sans-serif" }}
            onClick={handleClick}
          >
            Mark as Delivered
          </button>
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
