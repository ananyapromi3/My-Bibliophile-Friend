import React, { useState } from "react";
import styles from "../styles/profile.module.css";
import { useEffect } from "react";
import {
  faEye,
  faEyeSlash,
  faCircleArrowLeft,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function Profile({ profile }) {
  //   console.log(profile);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo1, setContactNo1] = useState("");
  const [contactNo2, setContactNo2] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [currLocationJs, setCurrLocationJs] = useState({});
  const [currLocation, setCurrLocation] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [loginInfo, setLoginInfo] = useState({
    email: profile.email,
    password: profile.pass,
    firstname: profile.firstname,
    lastname: profile.lastname,
    phn1: profile.contactno1,
    phn2: profile.contactno2,
    latitude: currLocationJs.latitude,
    longitude: currLocationJs.longitude,
  });
  console.log(loginInfo);
  const router = useRouter();
  const userId = router.query.userId;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginInfo((prevState) => ({
      email: prevState.email,
      password: prevState.password,
      firstname: prevState.firstname,
      lastname: prevState.lastname,
      sex: prevState.sex,
      dob: prevState.dob,
      phn1: prevState.phn1,
      phn2: prevState.phn2,
      latitude: currLocationJs.latitude,
      longitude: currLocationJs.longitude,
    }));
    const response = await fetch(`/api/bookFriend/updateProfile`, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    // const data = await response;
    console.log(response);
    alert("Account Updated");
    router.push(`/bookFriend/profile/${userId}`);
  };

  const getLocation = async () => {
    try {
      const location = await axios.get("https://ipapi.co");
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
      console.log(currLocationJs);
    });
  };

  useEffect(() => {
    getLocation();
    getLocationJs();
  }, []);

  let dob = Date.parse(profile.dob);
  dob = new Date(dob);
  dob = dob.toString();
  dob = dob.substring(3, 15);
  //   console.log(dob);
  //   dob = (profile.dob).split("T");
  //   console.log(dob);

  return (
    <div>
      <div className={styles.loginBox}>
        <form
          onSubmit={handleSubmit}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <label className={styles.label}>
            <p className={styles.label1}>First Name:</p>
            <input
              className={styles.input}
              type="text"
              disabled
              value={profile.firstname}
              //   onChange={(e) =>
              //     setLoginInfo((prevLoginInfo) => ({
              //       ...prevLoginInfo,
              //       firstname: e.target.value,
              //     }))
              //   }
              name="firstname"
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label1}>Last Name:</p>
            <input
              className={styles.input}
              type="text"
              value={profile.lastname}
              disabled
              name="lastname"
              //   onChange={(e) =>
              //     setLoginInfo((prevLoginInfo) => ({
              //       ...prevLoginInfo,
              //       lastname: e.target.value,
              //     }))
              //   }
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label1}>Email address:</p>
            <input
              className={styles.input}
              disabled
              type="email"
              value={profile.email}
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label1}>Password:</p>
            <input
              className={styles.passwordInput}
              type={showPassword ? "text" : "password"}
              value={profile.pass}
              disabled
              name="password"
              onChange={(e) =>
                setLoginInfo((prevLoginInfo) => ({
                  ...prevLoginInfo,
                  password: e.target.value,
                }))
              }
            />
            <div
              className={styles.passwordToggleButton}
              onClick={toggleShowPassword}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className={styles.eyeIcon}
              />
            </div>
          </label>
          <label className={styles.label}>
            <p className={styles.label1}>Date of Birth:</p>
            <input className={styles.input} type="text" value={dob} disabled />
          </label>
          <label className={styles.label}>
            <p className={styles.label1}>Gender:</p>
            <input
              className={styles.input}
              type="text"
              value={profile.gender}
              disabled
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label1}>Contact No (1):</p>
            <input
              disabled
              className={styles.input}
              type="text"
              value={profile.contactNo1}
              name="phn1"
              //   onChange={(e) =>
              //     setLoginInfo((prevLoginInfo) => ({
              //       ...prevLoginInfo,
              //       phn1: e.target.value,
              //     }))
              //   }
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label1}>Contact No (2):</p>
            <input
              disabled
              className={styles.input}
              type="text"
              name="phn2"
              value={profile.contactNo2}
              //   onChange={(e) =>
              //     setLoginInfo((prevLoginInfo) => ({
              //       ...prevLoginInfo,
              //       phn2: e.target.value,
              //     }))
              //   }
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label1}>Latitude</p>
            <input
              className={styles.input}
              type="text"
              value={currLocationJs.latitude}
              disabled
              //   onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label1}>Longitude</p>
            <input
              className={styles.input}
              type="text"
              value={currLocationJs.longitude}
              disabled
              //   onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          {/* <button className={styles.button} type="submit">
            Save
          </button> */}
        </form>
      </div>
    </div>
  );
}
