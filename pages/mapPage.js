import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();

  //    const center = { lat: 23, lng: 90 };
  //    const center2 = { lat: 23+0.1, lng: 90+.1 };

  const { longi1, lati1, longi2, lati2 } = router.query;

  return (
    <div>
      <h1>Demo Map</h1>
      <iframe
        // src={`/leaflet-map.html?lat=${center.lat}&lng=${center.lng}&lat2=${center2.lat}&lng2=${center2.lng}`}
        src={`/leaflet-map.html?lat=${lati1}&lng=${longi1}&lat2=${lati2}&lng2=${longi2}`}
        width="900"
        height="580"
      ></iframe>
    </div>
  );
};

export default Home;
