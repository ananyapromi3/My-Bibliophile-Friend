import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faList,
  faEnvelope,
  faInfoCircle,
  faUser,
  faClipboardList,
  faUserCircle,
  faSignOutAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/menu.module.css"; // Import your CSS module
import { useEffect } from "react";
import { useRouter } from "next/router";
import logo1 from "../public/pictures/logo_white.png";
import { useState } from "react";

export default function Menu({ active }) {
  const router = useRouter();
  const userId = router.query.userId;
  const [reqCount, setReqCount] = useState(0);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    router.push("http://localhost:3000");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("http://localhost:3000");
    }
  });

  // const handleSearch = async () => {
  //   try {
  //     const response = await fetch(`/api/bookFriend/offers?term=${userId}`);
  //     const data = await response.json();
  //     setReqCount(data.length);
  //   } catch (error) {
  //     console.error("Error searching:", error);
  //   }
  // };

  // useEffect(() => {
  //   handleSearch();
  // }, []);

  return (
    <div className={styles.menu}>
      <div
        className={styles.menuItem}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <img src={logo1.src} className={styles.logo} />{" "}
      </div>
      <div
        className={styles.menuItem}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <button
          className={active === "books" ? styles.active : styles.button}
          onClick={() => router.push(`/bookFriend/books/${userId}`)}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faBook} className={styles.menuIcon} />
          Books
        </button>
      </div>
      <div
        className={styles.menuItem}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <button
          className={active === "offers" ? styles.active : styles.button}
          onClick={() => router.push(`/bookFriend/offersFeed/${userId}`)}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faList} className={styles.menuIcon} />
          Offers
        </button>
      </div>
      <div
        className={styles.menuItem}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <button
          className={active === "profile" ? styles.active : styles.button}
          onClick={() => router.push(`/bookFriend/profile/${userId}`)}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faUser} className={styles.menuIcon} />
          My Profile
        </button>
      </div>
      <div
        className={styles.menuItem}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        {" "}
        <button
          className={active === "myOffers" ? styles.active : styles.button}
          onClick={() => router.push(`/bookFriend/myOffers/${userId}`)}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faClipboardList} className={styles.menuIcon} />
          My Offers
        </button>
      </div>
      <div
        className={styles.menuItem}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <button
          className={active === "reqs" ? styles.active : styles.button}
          onClick={() => router.push(`/bookFriend/notifications/${userId}`)}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faEnvelope} className={styles.menuIcon} />
          Offer Requests
          {/* {reqCount > 0 && (
            <span className={styles.notificationCount}>
              <b>{reqCount}</b>
            </span>
          )} */}
        </button>
      </div>
      <div
        className={styles.menuItem}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        {" "}
        <button
          className={active === "noti" ? styles.active : styles.button}
          onClick={() => router.push(`/bookFriend/noti/${userId}`)}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faBell} className={styles.menuIcon} />
          Notifications
        </button>
      </div>
      <div
        className={styles.menuItem}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <button
          className={active === "about" ? styles.active : styles.button}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faInfoCircle} className={styles.menuIcon} />
          About Us{" "}
        </button>
      </div>
      <div
        className={styles.menuItem}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <button
          className={styles.button}
          onClick={handleLogOut}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faUserCircle} className={styles.menuIcon} />
          Logout
        </button>
      </div>
    </div>
  );
}

// export async function getServerSideProps({ params }) {
//   const { userId } = params;
//   return { props: { userId } };
// }
