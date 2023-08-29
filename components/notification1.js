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
  const fName = notification1.NAMEWHOREQUESTED.split(" ");
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
    <>
      {notiStatus && notiStat == "show" ? (
        <div
          key={notification1.NOTIFICATIONID}
          className={styles.notificationCard}
        >
          <img
            className={styles.offerImage}
            src={
              notification1.BOOKCONDITIONPHOTO ||
              "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
            }
            alt="No photo available"
          />
          <br />
          <p
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.offerInfo}
          >
            <b>{notification1.NAMEWHOREQUESTED}</b> has requested to accept you
            offer for exchanging <b>{notification1.TITLE}</b>
          </p>
          <br />
          <button
            onClick={openModal}
            className={styles.acceptButton}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            See {fName[0]}'s Offers
          </button>
        </div>
      ) : (
        <></>
      )}

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
    </>
  );
}
