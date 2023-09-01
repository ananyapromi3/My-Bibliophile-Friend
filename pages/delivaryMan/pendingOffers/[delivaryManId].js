import styles from "../../../styles/pendingOffersFeed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Menu from "../../../components/menuDelMan";
import { useState } from "react";
import { useRouter } from "next/router";
import { async } from "regenerator-runtime";
import { useEffect } from "react";
import PendingDelivary from "../../../components/pendingDelivary";

export default function DelivaryAcceptedOffer() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [count, setCount] = useState(0);

  const delivaryManId = router.query.delivaryManId;

  const handleSearch = async () => {
    const response = await fetch(
      `/api/delivaryAcceptedOffers?id=${delivaryManId}`
    );
    const data = await response.json();
    setSearchResults(data);
    setCount(data.length);
    localStorage.setItem("pendingDelCount", data.length);
    console.log(localStorage.getItem("pendingDelCount"));
  };
  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    const func = async () => {
      const id = parseInt(delivaryManId);
      if (!isNaN(id)) {
        const response1 = await fetch(
          `/api/delivaryAcceptedOffers?id=${delivaryManId}`
        );
        const data1 = await response1.json();
        localStorage.setItem("pendingDelCount", data1.length);
      }
    };
    func();
  });

  const handleOfferAccepted = (acceptedExchangeId) => {
    setSearchResults((prevResults) =>
      prevResults.filter((offer) => offer.EXCHANGEID !== acceptedExchangeId)
    );
  };

  const handleStatusChange = (exchangeId, newStatus) => {
    setSearchResults((prevSearchResults) =>
      prevSearchResults.map((offer) =>
        offer.EXCHANGEID === exchangeId
          ? { ...offer, STATUS: newStatus }
          : offer
      )
    );
  };

  const activeMenu = "pendingOffers";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("http://localhost:3000");
    }
  });

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
          {searchResults.map((offer, index) => {
            return (
              <div key={offer.EXCHANGEID} className={styles.offerCard}>
                <PendingDelivary
                  offer={offer}
                  onStatusChange={handleStatusChange}
                  onOfferAccepted={handleOfferAccepted}
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
  const { delivaryManId } = params;
  return { props: { delivaryManId } };
}
