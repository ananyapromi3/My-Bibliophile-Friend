import { useState } from "react";
import { useRouter } from "next/router";
import Offer from "./offer";
import OfferSmall from "./offerSmall";
import styles from "../styles/notification.module.css";
export default function Notification1({ notification1, search }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    seeOffers();
    setIsModalOpen(true);
  };
  const closeModal = () => {
    search();
    setIsModalOpen(false);
  };
  const router = useRouter();
  const notificationId = notification1.NOTIFICATIONID;
  const notiStat = notification1.STATUS;
  const userId = router.query.userId;
  const emailWhoRequested = notification1.EMAILWHOREQUESTED;
  const offerId = notification1.OFFERID;
  const [notiStatus, setNotiStatus] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const seeOffers = async () => {
    try {
      const response = await fetch(`/api/userOffers?term=${notificationId}`);
      const data = await response.json();
      setSearchResults(data);
      console.log(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div key={notification1.NOTIFICATIONID} className={styles.notificationCard}>
      {notiStatus && notiStat == "show" ? (
        <div className={styles.container}>
          <div className={styles.left}>
            <img
              className={styles.offerImage}
              src={
                notification1.BOOKCONDITIONPHOTO ||
                "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
              }
              alt="No photo available"
              // width="50"
            />
          </div>
          {/* <Offer /> */}
          {/* <p>{notificationId}</p> */}
          <div className={styles.right}>
            <p>
              {notification1.NAMEWHOREQUESTED} has requested to accept you offer
              for exchanging {notification1.TITLE}
            </p>
          </div>
          {/* <button onClick={seeOffers}>See this users offers</button> */}
          <button onClick={openModal} className={styles.acceptButton}>
            See Offers
          </button>
        </div>
      ) : (
        <></>
      )}
      {/* {searchResults[0] ? (
        searchResults.map((offer, index) => {
          return (
            <div key={offer.OFFERID}>
              {offer.STATUS == "offered" && (
                <OfferSmall offer={offer} notification1={notification1} />
              )}
            </div>
          );
        })
      ) : (
        <></>
      )} */}
      {/* <button onClick={openModal}>See Offers</button> */}

      {isModalOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <div className={styles.cardContainer}>
              <div>
                <button className={styles.closeButton} onClick={closeModal}>
                  &times;
                </button>
              </div>
              <br />
              <div className={styles.modalContainer}>
                {searchResults[0] ? (
                  searchResults.map((offer, index) => (
                    <OfferSmall
                      offer={offer}
                      notification1={notification1}
                      closeModal={closeModal}
                      key={offer.OFFERID}
                    />
                  ))
                ) : (
                  <p>No offers available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
