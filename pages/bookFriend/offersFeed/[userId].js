import { useState } from "react";
import { useRouter } from "next/router";
// import Book from "../../../components/book";
import Offer from "../../../components/offer";
import { useEffect } from "react";

export default function Offers() {
  const router = useRouter();
  const userId = router.query.userId;
  const [searchResults, setSearchResults] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  // useEffect(() => {
  //   handleSearch();
  // }, []);

  const handleSearch = async () => {
    try {
      // console.log(userId);
      const response = await fetch(`/api/offers?term=${userId}`);
      const data = await response.json();
      setSearchResults(data);
      setButtonStatus(false);
      //   console.log(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div>
      <h1>Offer List for {userId}</h1>
      <br />
      {buttonStatus && <button onClick={handleSearch}>Load offers</button>}
      {searchResults.map((offer, index) => {
        return (
          <div key={offer.OFFERID}>
            {(offer.STATUS = "offered" && <Offer offer={offer} />)}
          </div>
        );
      })}
    </div>
  );
}
