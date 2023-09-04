import React from "react";
import styles from "../styles/aboutUs.module.css";
import Router from "next/router";
import { useRouter } from "next/router";
import { useState } from "react";

export default function About() {
  const activeMenu = "about";
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className={styles.container}>
      <img src="/biblogo.png" alt="Project Logo" className={styles.logo} />
      <h1
        className={styles.projectName}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        My Bibliophile Friend
      </h1>
      <div className={styles.section}>
        <h2
          className={styles.sectionHeader}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          
        </h2>
        <p
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          This project is developed with oracle sql, nodejs, javascript and nextjs framework.
        </p>
      </div>

      {/* Purpose */}
      <div className={styles.section}>
        <h2
          className={styles.sectionHeader}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          {/* Purpose */}
        </h2>
        <p
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          CSE-216 term project
        </p>
      </div>

      {/* Team Members */}
      <div className={styles.team}>
        <div className={styles.teamMember}>
          <div className={styles.teamMemberImage}>
            <img
              style={{ fontFamily: "Georgia, sans-serif" }}
              src="/mepic.jpg"
              alt="Team Member 1"
              className={styles.roundImage}
            />
          </div>
          <div className={styles.teamMemberInfo}>
            <p
              className={styles.memberName}
              style={{ fontFamily: "Georgia, sans-serif" }}
            >
              Ananya Shahrin Promi
            </p>
            <p
              className={styles.memberInfo}
              style={{ fontFamily: "Georgia, sans-serif" }}
            >
              ID: 2005079
            </p>
          </div>
        </div>

        <div className={styles.teamMember}>
          <div className={styles.teamMemberImage}>
            <img
              style={{ fontFamily: "Georgia, sans-serif" }}
              src="/upic.jpg"
              alt="Team Member 2"
              className={styles.roundImage}
            />
          </div>
          <div className={styles.teamMemberInfo}>
            <p
              className={styles.memberName}
              style={{ fontFamily: "Georgia, sans-serif" }}
            >
              Abrar Rahman Abir
            </p>
            <p
              className={styles.memberInfo}
              style={{ fontFamily: "Georgia, sans-serif" }}
            >
              ID: 2005072
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
