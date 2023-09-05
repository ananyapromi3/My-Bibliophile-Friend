import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/login.module.css";
import {
  faEye,
  faEyeSlash,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DynamicBackground from "../../../components/dynamicBackground";
import CustomAlert from "../../../components/alert";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const handleClick = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`/api/bookFriend/login`, {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "Contain-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        router.push(`/bookFriend/books/${data.id}`, undefined, {
          shallow: true,
        });
        // window.location.reload();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        // router.push(`/bookFriend/books/${data.id}`);
      } else {
        setAlertMessage("Wrong information");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
        <h1
          className={styles.heading}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Welcome back
        </h1>
        <form onSubmit={handleClick}>
          <input
            style={{ fontFamily: "Georgia, sans-serif" }}
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: e.target.value,
                password: prevState.password,
              }))
            }
            className={styles.input}
            name="email"
            required
          />
          <div className={styles.passwordInputContainer}>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) =>
                setLoginInfo((prevState) => ({
                  email: prevState.email,
                  password: e.target.value,
                }))
              }
              className={styles.passwordInput}
              name="password"
              required
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
          <button
            type="submit"
            name="loginButton"
            className={styles.button}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            Login
          </button>
        </form>
        <p
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.label}
        >
          Don't have an account?{" "}
          <Link
            href="/bookFriend/signup"
            className={styles.link}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <u>Sign Up</u>
          </Link>
        </p>
      </div>
      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </div>
  );
}
