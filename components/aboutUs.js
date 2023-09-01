import React from "react";
import styles from "../styles/aboutUs.module.css";

export default function About() {
  const activeMenu = "about";
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
          Procedure
        </h2>
        <p
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Describe the procedure of your project here.
        </p>
      </div>

      {/* Purpose */}
      <div className={styles.section}>
        <h2
          className={styles.sectionHeader}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Purpose
        </h2>
        <p
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Explain the purpose and goals of your project.
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
              src="/path/to/image2.png"
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
