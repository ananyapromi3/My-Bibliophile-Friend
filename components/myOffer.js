import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/offer.module.css";
import { off } from "process";
import ImageGallery from "./imageGallery";
import { async } from "regenerator-runtime";
import CustomAlert from "./alert";
import { toast } from "react-toastify";
import YesNoAlert from "./yesNoAlert";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function MyOffer({ offer, onStatusChange, onOfferAccepted }) {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showYesNo, setYesNo] = useState(false);
  const [yesNoMessage, setYesNoMessage] = useState("");
  const [cont, setCont] = useState(false);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const no = () => {
    setCont(false);
    setYesNo(false);
  };
  const yes = () => {
    setCont(true);
    setYesNo(false);
    deleteOffer();
  };
  const offerId = offer.OFFERID;
  const userId = router.query.userId;
  const [offerStatus, setOfferStatus] = useState(1);
  const notiInfo = {
    userId: userId,
    offerId: offerId,
  };

  const showToast = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };
  const showToastErr = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };

  const helper = async () => {
    setYesNoMessage("Are you sure you want to delete this offer?");
    setYesNo(true);
  };
  const deleteOffer = async () => {
    const response = await fetch(`/api/bookFriend/myOffersFeed`, {
      method: "POST",
      body: JSON.stringify(notiInfo),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.msg == "DELETED") {
      setAlertMessage("Offer deleted");
      setShowAlert(true);
      showToast("Offer successfully deleted");
      setOfferStatus(0);
      onStatusChange(offer.OFFERID, "accepted");
      onOfferAccepted(offer.OFFERID);
    } else {
      setAlertMessage("Could not delete offer");
      setShowAlert(true);
      showToastErr("Offer could not be deleted");
    }
    router.push(`/bookFriend/myOffers/${userId}`);
  };

  const [showCarousel, setShowCarousel] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(0);

  const openCarousel = (index) => {
    setShowCarousel(true);
    setZoomedIndex(index);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
    setZoomedIndex(0);
  };

  const photos = [];
  photos.push(offer.BOOKCONDITIONPHOTO);
  if (offer.BOOKCONDITIONPHOTO1) {
    photos.push(offer.BOOKCONDITIONPHOTO1);
  }
  if (offer.BOOKCONDITIONPHOTO2) {
    photos.push(offer.BOOKCONDITIONPHOTO2);
  }
  if (offer.BOOKCONDITIONPHOTO3) {
    photos.push(offer.BOOKCONDITIONPHOTO3);
  }
  if (offer.BOOKCONDITIONPHOTO4) {
    photos.push(offer.BOOKCONDITIONPHOTO4);
  }

  const images = photos.map((photo, index) => ({
    original: photo,
    thumbnail: photo,
    originalClass: styles.zoomableImage,
  }));
  let t = new Date(offer.TIME);
  t = JSON.stringify(t);

  return (
    <>
      {offer && offer.STATUS == "offered" ? (
        <div
          key={offer.OFFERID}
          className={styles.offerCard}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <div className={styles.imageGallery}>
            <div className={styles.thumbnail} onClick={() => openCarousel(0)}>
              <img src={photos[0]} alt={`Image 1`} />
            </div>
          </div>
          <br />
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>{offer.BOOK}</b>
          </p>
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            {offer.MESSAGE}
          </p>
          {/* <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>Distance:</b> {offer.DISTANCE.toFixed(5)} km
          </p> */}
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>Offered at: </b>
            {t.split('"')[1].split("T")[0]}{" "}
            {t.split('"')[1].split("T")[1].split(":")[0]}:
            {t.split('"')[1].split("T")[1].split(":")[1]}
          </p>
          <br />
          <button
            className={styles.acceptButton}
            onClick={helper}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            Delete offer
          </button>
        </div>
      ) : (
        <></>
      )}
      {showCarousel && (
        <div className={styles.carouselOverlay}>
          <div className={styles.carouselContainer}>
            <ImageGallery
              items={images}
              showIndex={true}
              startIndex={zoomedIndex}
              onClose={closeCarousel}
              lazyLoad={true}
            />
          </div>
        </div>
      )}
      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
      {showYesNo && <YesNoAlert message={yesNoMessage} onYes={yes} onNo={no} />}
    </>
  );
}
