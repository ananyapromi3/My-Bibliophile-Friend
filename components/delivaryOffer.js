import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/delivaryOffer.module.css";
import { async } from "regenerator-runtime";
import CustomAlert from "./alert";
import { toast } from "react-toastify";

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
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
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
    const data = await response.json();
    console.log(data);
    if (data.msg == "SUCCESSFUL") {
      setAlertMessage("Offer accepted");
      // setShowAlert(true);
      showToast("Offer accepted successfully");
      const id = parseInt(delId);
      if (!isNaN(id)) {
        const response1 = await fetch(
          `/api/delivaryAcceptedOffers?id=${delId}`
        );
        const data1 = await response1.json();
        localStorage.setItem("pendingDelCount", data1.length);
      }

      setOfferStatus(0);
      onStatusChange(offer.EXCHANGEID, "DONE");
      onOfferAccepted(offer.EXCHANGEID);
    } else {
      setAlertMessage("Could not accept offer");
      setShowAlert(true);
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
      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </>
  );
}
