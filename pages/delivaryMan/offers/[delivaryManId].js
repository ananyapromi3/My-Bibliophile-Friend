import DelivaryOffer from "../../../components/delivaryOffer";
import styles from "../../../styles/delivaryOffersFeed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Menu from "../../../components/menuDelMan";

import { useState } from "react";
import { useRouter } from "next/router";
import { async } from "regenerator-runtime";
import { useEffect } from "react";

export default function DeliveryNews() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [count, setCount] = useState(0);

  const handleSearch = async () => {
    const response = await fetch(`/api/delivaryOffers`);
    const data = await response.json();
    setSearchResults(data);
    setCount(data.length);
  };
  useEffect(() => {
    handleSearch();
  }, []);

  const delId = router.query.delivaryManId;
  const handleStatusChange = (exchangeId, newStatus) => {
    setSearchResults((prevSearchResults) =>
      prevSearchResults.map((offer) =>
        offer.EXCHANGEID === exchangeId
          ? { ...offer, STATUS: newStatus }
          : offer
      )
    );
  };

  const handleOfferAccepted = (acceptedExchangeId) => {
    setSearchResults((prevResults) =>
      prevResults.filter((offer) => offer.EXCHANGEID !== acceptedExchangeId)
    );
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
      const id = parseInt(delId);
      if (!isNaN(id)) {
        const response1 = await fetch(
          `/api/delivaryAcceptedOffers?id=${delId}`
        );
        const data1 = await response1.json();
        localStorage.setItem("pendingDelCount", data1.length);
      }
    };
    func();
  });

  const activeMenu = "offers";

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
                {
                  <DelivaryOffer
                    offer={offer}
                    onStatusChange={handleStatusChange}
                    onOfferAccepted={handleOfferAccepted}
                  />
                }
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
