import React from "react";
import styles from "../styles/friendModal.module.css";
import Profile from "../components/smallProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function FriendModal({ friends, onClose }) {
  return (
    <div
      className={styles.modalBackdrop}
      style={{ fontFamily: "Georgia, sans-serif" }}
    >
      <div
        className={styles.modalContent}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2
          className={styles.modalText}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          My Bibliophile Friends
        </h2>

        <div className={styles.profileGrid}>
          {friends.map((friend) => (
            <Profile key={friend.EMAIL} user={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}
