import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/mapPage.module.css";

const Home = () => {
  const router = useRouter();
  const { longi1, lati1, longi2, lati2 } = router.query;

  return (
    <>
      {/* <h1>Your delivery Location</h1> */}
      <div className={styles.modalBackdrop}>
        <iframe
          className={styles.modalContent}
          src={`/leaflet-map.html?lat=${lati1}&lng=${longi1}&lat2=${lati2}&lng2=${longi2}`}
          width="900"
          height="580"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
