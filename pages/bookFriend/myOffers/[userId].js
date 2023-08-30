import { useState } from "react";
import { useRouter } from "next/router";
import Offer from "../../../components/offer";
import { useEffect } from "react";
import styles from "../../../styles/offersFeed.module.css";
import Menu from "../../../components/menu";
import MyOffer from "../../../components/myOffer";

export default function Offers() {
  const activeMenu = "myOffers";
  const router = useRouter();
  const userId = router.query.userId;
  const [searchResults, setSearchResults] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleSearch();
  }, []);

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
      const response = await fetch(`/api/myOffers?term=${userId}`);
      const data = await response.json();
      setSearchResults(data);
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
            No offer available right now...
          </h1>
        )}
        <br />
        <div className={styles.offerGrid}>
          {searchResults.map((offer, index) => {
            return (
              <div key={offer.OFFERID} className={styles.offerCard}>
                <MyOffer
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
  const { userId } = params;
  return { props: { userId } };
}
