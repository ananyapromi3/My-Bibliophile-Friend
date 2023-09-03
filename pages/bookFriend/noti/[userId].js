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
        localStorage.setItem("notiCount", data1.length);
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
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

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
                {/* {noti.MSG} */}
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
