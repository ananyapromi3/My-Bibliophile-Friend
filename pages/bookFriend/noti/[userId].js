import { useState } from "react";
import { useRouter } from "next/router";
import Offer from "../../../components/offer";
import { useEffect } from "react";
import styles from "../../../styles/notiii.module.css";
import Menu from "../../../components/menu";
import Noti from "../../../components/noti";

export default function Offers() {
  const activeMenu = "noti";
  const router = useRouter();
  const userId = router.query.userId;
  const [searchResults, setSearchResults] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    const func = async () => {
      const id = parseInt(userId);
      if (!isNaN(id)) {
        const response1 = await fetch(`/api/noti?term=${id}`);
        const data1 = await response1.json();
        console.log(data1);
        let c = 0;
        for (let i = 0; i < data1.length; i++) {
          if (data1[i].STATUS == "UNREAD") {
            c++;
          }
        }
        localStorage.setItem("notiCount", c);
      }
    };
    func();
  });

  const handleStatusChange = (offerId, newStatus) => {
    setSearchResults((prevSearchResults) =>
      prevSearchResults.map((offer) =>
        offer.OFFERID === offerId ? { ...offer, STATUS: newStatus } : offer
      )
    );
  };

  const handleOfferAccepted = (acceptedOfferId) => {
    setSearchResults((prevResults) =>
      prevResults.filter((offer) => offer.OFFERID !== acceptedOfferId)
    );
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/noti?term=${userId}`);
      const data = await response.json();
      setSearchResults(data);
      console.log(data);
      setCount(data.length);
      // let c = 0;
      // for (let i = 0; i < data.length; i++) {
      //   if (data[i].STATUS == "UNREAD") {
      //     c++;
      //   }
      // }
      // localStorage.setItem("notiCount", c);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const markAsRead = async () => {
    try {
      const response = await fetch(`/api/bookFriend/notiRead?term=${userId}`);
      const data = await response.json();
      // setSearchResults(data);
      console.log(data);
      // setCount(data.length);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => markAsRead(), 50);
    return () => clearTimeout(timer);
  }, []);

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
            Notifications box empty...
          </h1>
        )}
        <br />
        <div className={styles.offerGrid}>
          {searchResults.map((noti, index) => {
            return (
              <div className={styles.offerCard}>
                <Noti noti={noti} />
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
