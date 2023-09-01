import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/offerSmall.module.css";
import ImageGallery from "./imageGallery";

export default function OfferSmall({ offer, notification1, closeModal }) {
  const router = useRouter();
  //   console.log(offer);
  // console.log(notification1);
  const notiId = notification1.NOTIFICATIONID;
  const offerId = offer.OFFERID;
  const ofStat = offer.STATUS;
  const userId = router.query.userId;
  //   const notificationId = notification1.NOTIFICATIONID;
  const offerId2 = notification1.OFFERID;
  const [offerStatus, setOfferStatus] = useState(1);
  const [seeOffers, setSeeOffers] = useState(1);
  const notiInfo = {
    notiId: notiId,
    userId: userId,
    offerId1: offerId,
    offerId2: offerId2,
  };
  const makeNotification = async () => {
    const response = await fetch(`/api/bookFriend/offersSmallFeed`, {
      method: "POST",
      body: JSON.stringify(notiInfo),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.msg == "SUCCESS") {
      alert("Offer accepted");
      setOfferStatus(0);
      closeModal();
    } else {
      alert("Could not accept offer");
    }
    router.push(`/bookFriend/notifications/${userId}`);
    setSeeOffers(0);
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
      {offerStatus && setSeeOffers && ofStat == "offered" ? (
        <div key={offer.OFFERID} className={styles.offerCard}>
          <div
            className={styles.imageGallery}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
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
            <b>Time:</b> {offer.TIME}
          </p>
          <br />
          <button
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.acceptButton}
            onClick={makeNotification}
          >
            Accept offer
          </button>
        </div>
      ) : (
        <></>
      )}
      {showCarousel && (
        <div
          className={styles.carouselOverlay}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <div
            className={styles.carouselContainer}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
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
