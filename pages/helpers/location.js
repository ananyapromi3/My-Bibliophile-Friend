import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [currLocation, setCurrLocation] = useState({});
  const [currLocationJs, setCurrLocationJs] = useState({});
  useEffect(() => {
    getLocation();
    getLocationJs();
  }, []);

  const getLocation = async () => {
    try {
      const location = await axios.get("https://ipapi.co/json");
      setCurrLocation(location.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
    });
  };

  return (
    <div>
      <h1>Your Current Location </h1>
      <p>Latitude: {currLocationJs.latitude}</p>
      <p>Longitude: {currLocationJs.longitude}</p>
    </div>
  );
}

export default App;
