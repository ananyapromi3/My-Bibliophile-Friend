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
        ></h2>
      </div>
      <div className={styles.section}>
        <h4
          className={styles.sectionHeader}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          CSE-216 term project
        </h4>
        <p
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          This project leverages Oracle SQL, Node.js, JavaScript, and the
          Next.js framework to provide a seamless and robust user experience.
        </p>
        <br />
        <p
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Our platform is designed to facilitate book enthusiasts in exchanging
          their beloved reads effortlessly. Here, you can connect with fellow
          bookworms and share books from your collection. Whether you're looking
          to discover new titles or share the stories that have touched your
          heart, our platform offers a vibrant community of book lovers. We
          believe in the power of literature to bring people together and ignite
          conversations. That's why we've created a space where you can not only
          swap books but also engage in meaningful discussions, reviews, and
          recommendations. Explore a diverse range of genres and authors, all
          within our book-loving community. Join us in celebrating the joy of
          reading, connecting with like-minded individuals, and expanding your
          literary horizons. Start your book exchange journey today, and let the
          stories flow from one reader to another on our platform.
        </p>
        <p
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Join our platform to exchange books and even become a delivery person
          for fellow readers. Connect, explore, and share your love for books
          with our vibrant community.
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
              <b>ID: </b>2005079
            </p>
            <p
              className={styles.memberInfo}
              style={{ fontFamily: "Georgia, sans-serif" }}
            >
              Level-2 Term-2
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
              <b>ID: </b>2005072
            </p>
            <p
              className={styles.memberInfo}
              style={{ fontFamily: "Georgia, sans-serif" }}
            >
              Level-2 Term-2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
