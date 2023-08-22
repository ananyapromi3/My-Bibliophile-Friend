import { useState } from "react";
import { useRouter } from "next/router";
import Offer from "./offer";
import OfferSmall from "./offerSmall";

export default function Notification1({ notification1 }) {
  const router = useRouter();
  const notificationId = notification1.NOTIFICATIONID;
  const notiStat = notification1.STATUS;
  const userId = router.query.userId;
  const emailWhoRequested = notification1.EMAILWHOREQUESTED;
  const offerId = notification1.OFFERID;
  const [notiStatus, setNotiStatus] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const seeOffers = async () => {
    try {
      const response = await fetch(`/api/userOffers?term=${notificationId}`);
      const data = await response.json();
      setSearchResults(data);
      console.log(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div key={notification1.NOTIFICATIONID}>
      {notiStatus && notiStat == "show" ? (
        <div>
          {/* <Offer /> */}
          <p>{notificationId}</p>
          <p>
            {notification1.NAMEWHOREQUESTED} has requested to accept you offer
            for exchanging {notification1.TITLE}
          </p>
          <img
            src={
              notification1.BOOKCONDITIONPHOTO ||
              "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
            }
            alt="No photo available"
            width="50"
          />
          <button onClick={seeOffers}>See this users offers</button>
        </div>
      ) : (
        <></>
      )}
      {searchResults[0] ? (
        searchResults.map((offer, index) => {
          return (
            <div key={offer.OFFERID}>
              {offer.STATUS == "offered" && (
                <OfferSmall offer={offer} notification1={notification1} />
              )}
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
