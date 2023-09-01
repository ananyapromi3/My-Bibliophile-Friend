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
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/menu.module.css"; // Import your CSS module
import { useEffect } from "react";
import { useRouter } from "next/router";
import logo1 from "../public/pictures/logo_white.png";
import { useState } from "react";

export default function Menu({ active }) {
  const router = useRouter();
  const userId = router.query.delivaryManId;
  const [reqCount, setReqCount] = useState(0);

  const handleLogOut = () => {
    localStorage.removeItem("pendingDelCount");
    localStorage.removeItem("token");
    router.push("http://localhost:3000");
  };

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   router.push("http://localhost:3000");
    // }
    const cnt = localStorage.getItem("pendingDelCount");
    if (cnt != 0) {
      setPendingDelCount(cnt);
      console.log("cnt is " + pendingDelCount);
    }

    const token = localStorage.getItem("token");
    // const email = router.query.mail;
    if (!token) {
      router.push("http://localhost:3000");
      return;
    }
    const fetchData = async () => {
      const response = await fetch(`/api/authentication?token=${token}`);
      const data = await response.json();
      if (
        data.id != router.query.delivaryManId &&
        router.query.delivaryManId != undefined
      ) {
        router.push("http://localhost:3000");
      }
    };
    fetchData();
  });

  const [pendingDelCount, setPendingDelCount] = useState(0);

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
          className={active === "offers" ? styles.active : styles.button}
          onClick={() => router.push(`/delivaryMan/offers/${userId}`)}
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
          className={active === "pendingOffers" ? styles.active : styles.button}
          onClick={() => router.push(`/delivaryMan/pendingOffers/${userId}`)}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faTruck} className={styles.menuIcon} />
          Pending Deliveries
          {pendingDelCount > 0 && (
            <span className={styles.notificationCount}>
              <b>{pendingDelCount}</b>
            </span>
          )}
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
        {" "}
        <button
          className={active === "myOffers" ? styles.active : styles.button}
          onClick={() => router.push(`/delivaryMan/myOffers/${userId}`)}
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
          className={active === "about" ? styles.active : styles.button}
          onClick={() => router.push(`/delivaryMan/aboutUs`)}
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
          className={active === "profile" ? styles.active : styles.button}
          onClick={() => router.push(`/delivaryMan/profile/${userId}`)}
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

export async function getServerSideProps({ params }) {
  const { delivaryManId } = params;
  return { props: { delivaryManId } };
}
