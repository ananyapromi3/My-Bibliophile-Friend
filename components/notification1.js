import { useState } from "react";
import { useRouter } from "next/router";
import Offer from "./offer";
import OfferSmall from "./offerSmall";
import styles from "../styles/notification.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
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

  const decline = async () => {
    try {
      const response = await fetch(
        `/api/bookFriend/declineOffer?term=${notificationId}`
      );
      const data = await response.json();
      // setSearchResults(data);
      console.log(data);
      if (data.msg == "DECLINED") {
        showToast("Offer declined successfully");
        setNotiStatus(0);
        router.push(`/bookFriend/notifications/${userId}`);
        router.reload();
      } else {
        showToastErr("Could not decline offer");
      }
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
          <br />
          <button
            onClick={decline}
            className={styles.acceptButton}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            Decline request
          </button>
        </div>
      ) : (
        <></>
      )}

      {isModalOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <div className={styles.cardContainer}>
              <button className={styles.closeButton} onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <div className={styles.modalContainer}>
                {searchResults[0] ? (
                  searchResults.map((offer, index) => (
                    <div className={styles.offerCard}>
                      <OfferSmall
                        offer={offer}
                        notification1={notification1}
                        closeModal={closeModal}
                        key={offer.OFFERID}
                      />
                    </div>
                  ))
                ) : (
                  <p
                    className={styles.offerTitleSmall}
                    style={{ fontFamily: "Georgia, sans-serif" }}
                  >
                    No offers available right now...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
