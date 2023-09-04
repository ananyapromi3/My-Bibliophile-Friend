import React from "react";
import styles from "../styles/alert.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CustomAlert({ message, onClose }) {
  return (
    <div className={styles.alert}>
      <p style={{ fontFamily: "Georgia, sans-serif" }} className={styles.msg}>
        {message}
      </p>
      <button
        style={{ fontFamily: "Georgia, sans-serif" }}
        className={styles.button}
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}
