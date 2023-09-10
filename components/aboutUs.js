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
          Supervised by <b>A.K.M. Mehedi Hasan</b>
          <br />
          Lecturer, Bangladesh University of Engineering and Technology
        </p>
        <p
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          This project leverages Oracle SQL, Node.js, JavaScript, and the
          Next.js framework to provide a seamless and robust user experience.
        </p>
        <br />
        <h4
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          How Bibliophile works...
        </h4>
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
          Here, we offer you a unique opportunity to take your passion for books
          a step further by becoming a delivery person in our book exchange
          community. If you're someone who enjoys the thrill of connecting
          people with their next great read, you can sign up as a delivery
          person. As a delivery person, you'll play a vital role in ensuring the
          smooth exchange of books between fellow readers. Whether it's sharing
          your favorite titles or helping others discover hidden literary gems,
          your role as a delivery person adds a personal touch to every book
          exchange. It's not just about delivering books; it's about fostering a
          sense of camaraderie within our community.
        </p>
        <p
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          So, whether you're here to exchange, explore, or deliver, our platform
          welcomes book enthusiasts from all walks of life. Join us today and be
          a part of this exciting literary journey!
        </p>
        <br />
        <h5
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Project outcomes...
        </h5>
        <p
          className={styles.sectionContent}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          The successful culmination of this project has yielded several
          significant outcomes. Foremost, the platform now offers a seamless and
          user-centric book exchange experience, facilitating the dissemination
          of knowledge and literature within the community. The integration of
          advanced search and filtering functionalities empowers users to
          effortlessly discover books of interest while establishing connections
          with specific individuals. Moreover, the adoption of cutting-edge web
          technologies and frameworks, including Oracle SQL, Node.js,
          JavaScript, and Next.js, ensures a responsive, secure, and
          high-performance platform. In sum, this project has delivered a
          sophisticated and user-friendly environment, fostering meaningful
          engagement and enabling book enthusiasts to partake in a world of
          literary possibilities with ease and efficiency.
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
              <br />
              Undergraduate student
              <br />
              Level-2 Term-2
              <br />
              Bangladesh University of Engineering and Technology
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
              <br />
              Undergraduate student
              <br />
              Level-2 Term-2
              <br />
              Bangladesh University of Engineering and Technology
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
