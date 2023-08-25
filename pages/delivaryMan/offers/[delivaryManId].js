// import DelivaryOffer from "../../components/delivaryOffer";
import DelivaryOffer from "../../../components/delivaryOffer";
import styles from "../../../styles/delivaryOffersFeed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

//import { router } from "json-server";
import { useState } from "react";
import { useRouter } from "next/router";
import { async } from "regenerator-runtime";
import { useEffect } from "react";

export default function DeliveryNews() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`/api/delivaryOffers`);
    // console.log("dsgasg");
    const data = await response.json();
    setSearchResults(data);
    // console.log(data);
  };
  useEffect(() => {
    // userId = router.query.userId;
    handleSearch();
  }, []);

  const delId = router.query.deliveryManId;
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
    // Update the searchResults to remove the accepted offer
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

  return (
    <div>
      <button onClick={handleLogOut}>
        Log Out {"  "}
        <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
      </button>
      <h1 className={styles.offerTitle}>Delivery Offer List for you</h1>
      <br />
      {/* <button onClick={handleSearch}>Load Delivary Offers</button> */}
      <div className={styles.offerGrid}>
        {searchResults.map((offer, index) => {
          return (
            <div key={offer.EXCHANGEID}>
              {offer && offer.STATUS == "PENDING" ? (
                <div className={styles.offerCard}>
                  {
                    <DelivaryOffer
                      offer={offer}
                      onStatusChange={handleStatusChange}
                      onOfferAccepted={handleOfferAccepted}
                    />
                  }
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
// export async function getServerSideProps({ params }) {
//   const { delId } = params;
//   return { props: { delId } };
// }
