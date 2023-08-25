import { useState } from "react";
import { useRouter } from "next/router";
// import Book from "../../../components/book";
import Offer from "../../../components/offer";
import { useEffect } from "react";
import Notification1 from "../../../components/notification1";
import styles from "../../../styles/notiFeed.module.css";

export default function Notifications1() {
  const router = useRouter();
  const userId = router.query.userId;
  const [searchResults, setSearchResults] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  // useEffect(() => {
  //   handleSearch();
  // }, []);
  useEffect(() => {
    // userId = router.query.userId;
    handleSearch();
  }, []);
  const handleSearch = async () => {
    try {
      // console.log(userId);
      const response = await fetch(`/api/notifications?term=${userId}`);
      const data = await response.json();
      setSearchResults(data);
      setButtonStatus(false);
      //   console.log(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div>
      <h1 className={styles.offerTitle}>Notification List for you...</h1>
      <br />
      {/* {buttonStatus ? (
        <button onClick={handleSearch}>Load notifications</button>
      ) : (
        <></>
      )} */}
      <div className={styles.offerGrid}>
        {searchResults.map((notification1, index) => {
          return (
            <div key={notification1.NOTIFICATIONID}>
              <div className={styles.offerCard}>
                <Notification1 notification1={notification1} search={handleSearch} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export async function getServerSideProps({ params }) {
  const { userId } = params;
  return { props: { userId } };
}
