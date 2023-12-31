import styles from "../../../styles/myOffersFeed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Menu from "../../../components/menuDelMan";
import { useState } from "react";
import { useRouter } from "next/router";
import { async } from "regenerator-runtime";
import { useEffect } from "react";
import MyDelivary from "../../../components/myDelivary";

export default function DelivaryAcceptedOffer() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [count, setCount] = useState(0);

  const delivaryManId = router.query.delivaryManId;

  const handleSearch = async () => {
    const response = await fetch(
      `/api/myAcceptedDelivaryOffers?id=${delivaryManId}`
    );
    const data = await response.json();
    setSearchResults(data);
    setCount(data.length);
  };

  const handleOfferAccepted = (acceptedExchangeId) => {
    setSearchResults((prevResults) =>
      prevResults.filter((offer) => offer.EXCHANGEID !== acceptedExchangeId)
    );
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleStatusChange = (exchangeId, newStatus) => {
    setSearchResults((prevSearchResults) =>
      prevSearchResults.map((offer) =>
        offer.EXCHANGEID === exchangeId
          ? { ...offer, STATUS: newStatus }
          : offer
      )
    );
  };

  const activeMenu = "myOffers";

  return (
    <>
      <Menu active={activeMenu} />
      <div className={styles.container}>
        {count ? (
          <h1
            className={styles.offerTitle}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            You have successfully completed these offers{" "}
          </h1>
        ) : (
          <h1
            className={styles.offerTitle}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            You have not completed any offer yet...
          </h1>
        )}
        <br />
        <div className={styles.offerGrid}>
          {searchResults.map((offer, index) => {
            return (
              <div key={offer.EXCHANGEID} className={styles.offerCard}>
                <MyDelivary
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
