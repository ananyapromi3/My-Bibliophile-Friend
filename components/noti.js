import React from "react";
import styles from "../styles/noti.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMessage, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Noti({ noti }) {
  console.log(noti.MSG);
  let t = new Date(noti.TIME);
  t = JSON.stringify(t);
  return (
    <>
      {noti.STATUS == "READ" ? (
        <div className={styles.offerCard}>
          <b>
            <FontAwesomeIcon className={styles.icon} icon={faCheck} />{" "}
          </b>
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>{" " + noti.MSG}</b>
          </p>
          <p
            className={styles.time}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            {t.split('"')[1].split("T")[0]}{" "}
            {t.split('"')[1].split("T")[1].split(":")[0]}:
            {t.split('"')[1].split("T")[1].split(":")[1]}
          </p>
        </div>
      ) : (
        <div className={styles.offerCard2}>
          <b>
            <FontAwesomeIcon className={styles.icon} icon={faCheck} />{" "}
          </b>
          <p
            className={styles.offerInfo}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <b>{" " + noti.MSG}</b>
          </p>
          <p
            className={styles.time}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            {t.split('"')[1].split("T")[0]}{" "}
            {t.split('"')[1].split("T")[1].split(":")[0]}:
            {t.split('"')[1].split("T")[1].split(":")[1]}
          </p>
        </div>
      )}
    </>
  );
}
