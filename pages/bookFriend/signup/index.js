import React from "react";
import Link from "next/link";
// import { useState } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
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

  const router = useRouter();

  //const [searchResults, setSearchResults] = useState([]);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    sex: "",
    dob: "",
    phn1: "",
    phn2: "",
    latitute: currLocationJs.latitude,
    longitude: currLocationJs.longitude,
  });
  const handleClick = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`/api/bookFriend/signup`, {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "Contain-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error searching:", error);
    }
    console.log("SUCCESSSS");
  };
  return (
    <form onSubmit={handleClick}>
      <div>
        <h1>Welcome to Sign Up</h1>
        <label>
          Email:
          <input
            type="email"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: e.target.value,
                password: prevState.password,
                firstname: prevState.firstname,
                lastname: prevState.lastname,
                sex: prevState.sex,
                dob: prevState.dob,
                phn1: prevState.phn1,
                phn2: prevState.phn2,
                latitute: prevState.latitute,
                longitude: prevState.longitude,
              }))
            }
            name="email"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: prevState.email,
                password: e.target.value,
                firstname: prevState.firstname,
                lastname: prevState.lastname,
                sex: prevState.sex,
                dob: prevState.dob,
                phn1: prevState.phn1,
                phn2: prevState.phn2,
                latitute: prevState.latitute,
                longitude: prevState.longitude,
              }))
            }
            name="password"
          />
        </label>
        <br />
        <label>
          Firstname:
          <input
            type="text"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: prevState.email,
                password: prevState.password,
                firstname: e.target.value,
                lastname: prevState.lastname,
                sex: prevState.sex,
                dob: prevState.dob,
                phn1: prevState.phn1,
                phn2: prevState.phn2,
                latitute: prevState.latitute,
                longitude: prevState.longitude,
              }))
            }
            name="firstname"
          />
        </label>
        <br />
        <label>
          Lastname:
          <input
            type="text"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: prevState.email,
                password: prevState.password,
                firstname: prevState.firstname,
                lastname: e.target.value,
                sex: prevState.sex,
                dob: prevState.dob,
                phn1: prevState.phn1,
                phn2: prevState.phn2,
                latitute: prevState.latitute,
                longitude: prevState.longitude,
              }))
            }
            name="lastname"
          />
        </label>
        <br />
        <label>
          Sex :
          <input
            type="text"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: prevState.email,
                password: prevState.password,
                firstname: prevState.firstname,
                lastname: prevState.lastname,
                sex: e.target.value,
                dob: prevState.dob,
                phn1: prevState.phn1,
                phn2: prevState.phn2,
                latitute: prevState.latitute,
                longitude: prevState.longitude,
              }))
            }
            name="sex"
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: prevState.email,
                password: prevState.password,
                firstname: prevState.firstname,
                lastname: prevState.lastname,
                sex: prevState.sex,
                dob: e.target.value,
                phn1: prevState.phn1,
                phn2: prevState.phn2,
                latitute: prevState.latitute,
                longitude: prevState.longitude,
              }))
            }
            name="dob"
          />
        </label>
        <br />
        <label>
          Contact No.(1):
          <input
            type="text"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: prevState.email,
                password: prevState.password,
                firstname: prevState.firstname,
                lastname: prevState.lastname,
                sex: prevState.sex,
                dob: prevState.dob,
                phn1: e.target.value,
                phn2: prevState.phn2,
                latitute: prevState.latitute,
                longitude: prevState.longitude,
              }))
            }
            name="phn1"
          />
        </label>
        <br />
        <label>
          Contact No.(2):
          <input
            type="text"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: prevState.email,
                password: prevState.password,
                firstname: prevState.firstname,
                lastname: prevState.lastname,
                sex: prevState.sex,
                dob: prevState.dob,
                phn1: prevState.phn1,
                phn2: e.target.value,
                latitute: prevState.latitute,
                longitude: prevState.longitude,
              }))
            }
            name="phn2"
          />
        </label>
        <br />
        <button type="submit" name="loginButton">
          SignUp
        </button>
      </div>
      <div>
        <h3>Your Current Location </h3>
        <p>Latitude: {currLocationJs.latitude}</p>
        <p>Longitude: {currLocationJs.longitude}</p>
      </div>
    </form>
  );
}