import { useState } from "react";
import { useRouter } from "next/router";
import Menu from "../../../components/menu";
import BookFilters from "../../../components/bookFilter";
import Offer from "../../../components/offer";
import { useEffect } from "react";
import Notification1 from "../../../components/notification1";
import styles from "../../../styles/notiFeed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function Notifications1() {
  const router = useRouter();
  const userId = router.query.userId;
  const [searchResults, setSearchResults] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    handleSearch();
  }, []);
  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/notifications?term=${userId}`);
      const data = await response.json();
      setSearchResults(data);
      setCount(data.length);
      localStorage.setItem("notificationCount", data.length);
      setButtonStatus(false);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

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

  useEffect(() => {
    const func = async () => {
      const id = parseInt(userId);
      if (!isNaN(id)) {
        const response1 = await fetch(`/api/notifications?term=${id}`);
        const data1 = await response1.json();
        localStorage.setItem("notificationCount", data1.length);
      }
    };
    func();
  });

  const activeMenu = "reqs";

  return (
    <>
      <Menu active={activeMenu} />
      <div className={styles.container}>
        {count ? (
          <h1
            className={styles.offerTitle}
            style={{ fontFamily: "Georgia, sans-serif" }}
          ></h1>
        ) : (
          <h1
            className={styles.offerTitle}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            No offer available right now...
          </h1>
        )}
        <br />
        <div className={styles.offerGrid}>
          {searchResults.map((notification1, index) => {
            return (
              <div
                key={notification1.NOTIFICATIONID}
                className={styles.offerCard}
              >
                <Notification1
                  notification1={notification1}
                  search={handleSearch}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { userId } = params;
  return { props: { userId } };
}
