import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/offer.module.css";
import { off } from "process";
import ImageGallery from "./imageGallery";

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

  const [showCarousel, setShowCarousel] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(0);

  const openCarousel = (index) => {
    setShowCarousel(true);
    setZoomedIndex(index);
    console.log(images);
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
    </>
  );
}
