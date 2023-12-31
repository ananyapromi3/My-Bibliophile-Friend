import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import DynamicBackground from "../../../components/dynamicBackground";
import styles from "../../../styles/signup.module.css";
import {
  faEye,
  faEyeSlash,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomAlert from "../../../components/alert";
import { toast } from "react-toastify";

function isPasswordValid(password) {
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  const numberRegex = /\d/;
  return (
    specialCharRegex.test(password) &&
    numberRegex.test(password) &&
    password.length >= 8
  );
}

export default function Login() {
  const [currLocation, setCurrLocation] = useState({});
  const [currLocationJs, setCurrLocationJs] = useState({});
  useEffect(() => {
    getLocation();
    getLocationJs();
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
      // console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
      // console.log(currLocationJs);
    });
  };

  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    sex: "",
    dob: "",
    phn1: "",
    phn2: "",
    latitude: 0,
    longitude: 0,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const showToast = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };
  const showToastErr = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };
  const [confirmPass, setConfirmPass] = useState("");
  const handleClick = async (event) => {
    try {
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
      if (loginInfo.password != confirmPass) {
        setAlertMessage("Passwords do not match.");
        setShowAlert(true);
        return;
      }
      if (!isPasswordValid(loginInfo.password)) {
        setAlertMessage(
          "Your password must contain at least one special character and a number. It must have a length of at least 8."
        );
        setShowAlert(true);
        return;
      }
      const response = await fetch(`/api/delivaryMan/signup`, {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "Contain-Type": "application/json",
        },
      });
      const data = await response.json();
      // console.log(data);
      if (data.msg1 == "SUCCESSFUL") {
        setAlertMessage("Account Created");
        showToast("Account Created Successfully");
        router.push(`/delivaryMan/login`);
      } else if (data.msg1 == "DUPLICATE") {
        setAlertMessage("You already have an account");
        setShowAlert(true);
      } else {
        setAlertMessage("Cannot create account");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  };
  return (
    <div className={styles.container}>
      <Link href="/">
        <button
          className={styles.backButton}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>
      </Link>
      <DynamicBackground />
      <div className={styles.loginBox}>
        {/* <h1
          className={styles.heading}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Create Account
        </h1> */}
        <form onSubmit={handleClick}>
          <input
            className={styles.input}
            required
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="email"
            placeholder="Email"
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
                latitude: currLocationJs.latitude,
                longitude: currLocationJs.longitude,
              }))
            }
            name="email"
          />
          <div className={styles.passwordInputContainer}>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className={styles.passwordInput}
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
                  latitude: currLocationJs.latitude,
                  longitude: currLocationJs.longitude,
                }))
              }
              name="password"
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
          </div>
          <div className={styles.passwordInputContainer}>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              placeholder="Confirm password"
              type={showPassword ? "text" : "password"}
              className={styles.passwordInput}
              onChange={(e) => setConfirmPass(e.target.value)}
              name="password"
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
          </div>
          <input
            type="text"
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            placeholder="First Name"
            required
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
                latitude: currLocationJs.latitude,
                longitude: currLocationJs.longitude,
              }))
            }
            name="firstname"
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            placeholder="Last Name"
            required
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
                latitude: currLocationJs.latitude,
                longitude: currLocationJs.longitude,
              }))
            }
            name="lastname"
          />
          <div
            className={styles.label}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            Gender :{" "}
            <select
              className={styles.selectBox}
              style={{ fontFamily: "Georgia, sans-serif" }}
              required
              name="sex"
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
                  latitude: currLocationJs.latitude,
                  longitude: currLocationJs.longitude,
                }))
              }
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div
            className={styles.label}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            Date of Birth :{" "}
            <input
              className={styles.dob}
              style={{ fontFamily: "Georgia, sans-serif" }}
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
                  latitude: currLocationJs.latitude,
                  longitude: currLocationJs.longitude,
                }))
              }
              name="dob"
            />
          </div>
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            placeholder="Contact No. 1"
            required
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
                latitude: currLocationJs.latitude,
                longitude: currLocationJs.longitude,
              }))
            }
            name="phn1"
          />
          <input
            className={styles.input}
            style={{ fontFamily: "Georgia, sans-serif" }}
            placeholder="Contact No. 2"
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
                latitude: currLocationJs.latitude,
                longitude: currLocationJs.longitude,
              }))
            }
            name="phn2"
          />
          <button
            type="submit"
            name="loginButton"
            className={styles.button}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            SignUp
          </button>
        </form>
        <p
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.label1}
        >
          Already have an account?{" "}
          <Link
            href="/bookFriend/login"
            className={styles.link}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <u>Log in</u>
          </Link>
        </p>
      </div>
      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </div>
  );
}
