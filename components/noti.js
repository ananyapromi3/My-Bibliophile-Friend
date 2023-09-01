import React from "react";
import styles from "../styles/noti.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Noti({ noti }) {
  return (
    <div className={styles.offerCard}>
      <p
        className={styles.offerInfo}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        {" "}
        <b>
          <FontAwesomeIcon className={styles.icon} icon={faCheck} />{" "}
        </b>
        {" " + noti.MSG}
      </p>
    </div>
  );
}
