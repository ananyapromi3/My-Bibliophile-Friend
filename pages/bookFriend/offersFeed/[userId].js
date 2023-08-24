import { useState } from "react";
import { useRouter } from "next/router";
// import { getServerSideProps } from "next";
// import Book from "../../../components/book";
import Offer from "../../../components/offer";
import { useEffect } from "react";
import styles from "../../../styles/offersFeed.module.css";

export default function Offers() {
  const router = useRouter();
  const userId = router.query.userId;
  const [searchResults, setSearchResults] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  useEffect(() => {
    // userId = router.query.userId;
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
    // Update the searchResults to remove the accepted offer
    setSearchResults((prevResults) =>
      prevResults.filter((offer) => offer.OFFERID !== acceptedOfferId)
    );
  };

  const handleSearch = async () => {
    try {
      // console.log(userId);
      const response = await fetch(`/api/offers?term=${userId}`);
      const data = await response.json();
      setSearchResults(data);
      // setButtonStatus(false);
      //   console.log(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  // useEffect(() => {
  //   handleSearch();
  // }, [userId]);

  return (
    <div>
      <h1 className={styles.offerTitle}>Offer List for you</h1>
      <br />
      {/* {buttonStatus && (
        <button onClick={handleSearch}>Loading your offers...</button>
      )} */}
      <div className={styles.offerGrid}>
        {searchResults.map((offer, index) => {
          return (
            <div key={offer.OFFERID}>
              {offer && offer.STATUS == "offered" ? (
                <div className={styles.offerCard}>
                  {offer.STATUS == "offered" && (
                    <Offer
                      offer={offer}
                      onStatusChange={handleStatusChange}
                      onOfferAccepted={handleOfferAccepted}
                    />
                  )}
                </div>
              ) : (
                <></>
              )}
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
