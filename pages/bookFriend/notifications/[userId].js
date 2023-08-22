import { useState } from "react";
import { useRouter } from "next/router";
// import Book from "../../../components/book";
import Offer from "../../../components/offer";
import { useEffect } from "react";
import Notification1 from "../../../components/notification1";

export default function Notifications1() {
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
      const response = await fetch(`/api/notifications?term=${userId}`);
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
      <h1>Notification List for {userId}</h1>
      <br />
      {buttonStatus ? (
        <button onClick={handleSearch}>Load notifications</button>
      ) : (
        <></>
      )}
      {searchResults.map((notification1, index) => {
        return (
          <div key={notification1.NOTIFICATIONID}>
            <Notification1 notification1={notification1} />
          </div>
        );
      })}
    </div>
  );
}
