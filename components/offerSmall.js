import { useState } from "react";
import { useRouter } from "next/router";
import { off } from "process";

export default function OfferSmall({ offer, notification1 }) {
  const router = useRouter();
  //   console.log(offer);
  // console.log(notification1);
  const notiId = notification1.NOTIFICATIONID;
  const offerId = offer.OFFERID;
  const ofStat = offer.STATUS;
  const userId = router.query.userId;
  //   const notificationId = notification1.NOTIFICATIONID;
  const offerId2 = notification1.OFFERID;
  const [offerStatus, setOfferStatus] = useState(1);
  const [seeOffers, setSeeOffers] = useState(1);
  const notiInfo = {
    notiId: notiId,
    userId: userId,
    offerId1: offerId,
    offerId2: offerId2,
  };
  //   console.log(notiInfo);
  const makeNotification = async () => {
    const response = await fetch(`/api/bookFriend/offersSmallFeed`, {
      method: "POST",
      body: JSON.stringify(notiInfo),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
    if (data.msg == "NOTIFICATION2 SENT") {
      alert("Offer accepted");
      setOfferStatus(0);
      //   router.push(`/bookFriend/notifications/${userId}`);
    } else {
      alert("Could not accept offer");
    }
    router.push(`/bookFriend/notifications/${userId}`);
    setSeeOffers(0);
  };

  return (
    <div key={offer.OFFERID}>
      {offerStatus && setSeeOffers && ofStat == "offered" ? (
        <div>
          <img
            src={
              offer.BOOKCONDITIONPHOTO ||
              "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
            }
            alt="No photo available"
            width="50"
          />
          <br />
          <br />
          <h5>{offer.MESSAGE}</h5>
          <p>Distance: {offer.DISTANCE}</p>
          <p>Time: {offer.TIME}</p>
          <p>Offered by: {offer.NAME}</p>
          <button onClick={makeNotification}>Accept offer</button>
          <hr />
          <hr />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
