import React from "react";
import styles from "../styles/smallProfile.module.css";

export default function Profile({ user }) {
  return (
    <div key={user.EMAIL} className={styles.offerCard}>
      <h2 className={styles.offerTitle}
        style={{ fontFamily: "Georgia, sans-serif" }}>{user.NAME}</h2>
      <p
        className={styles.offerInfo}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        EMAIL: {user.EMAIL}
      </p>
      <p
        className={styles.offerInfo}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        Share count: {user.SHARED_COUNT}
      </p>
    </div>
  );
}
