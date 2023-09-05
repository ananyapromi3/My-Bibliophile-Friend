import React from "react";
import styles from "../styles/yesNoAlert.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function YesNoAlert({ message, onYes, onNo }) {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.alert}>
        <p style={{ fontFamily: "Georgia, sans-serif" }} className={styles.msg}>
          {message}
        </p>
        <div className={styles.buttonContainer}>
          <button
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.button}
            onClick={onYes}
          >
            Yes
          </button>
          <button
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.button}
            onClick={onNo}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default YesNoAlert;
