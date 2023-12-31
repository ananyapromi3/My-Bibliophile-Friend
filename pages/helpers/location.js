import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [currLocation, setCurrLocation] = useState({});
  const [currLocationJs, setCurrLocationJs] = useState({});
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    getLocation();
    getLocationJs();
  }, []);

  const getLocation = async () => {
    try {
      const location = await fetch("https://ipapi.co");
      setCurrLocation(location.data);
      // console.log(currLocationJs);
    } catch (err) {
      console.log(err);
    }
  };

  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      console.log(latitude);
      console.log(longitude);
      setLatitude(latitude);
      setLongitude(longitude);
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
