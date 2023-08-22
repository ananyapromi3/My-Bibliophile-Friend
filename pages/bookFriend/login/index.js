import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/login.module.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
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
      setSearchResults(data);
      if (data[0]) {
        router.push(`/bookFriend/books/${data[0].ID}`);
      } else {
        alert(`Wrong information`);
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
      <div className={styles.loginBox}>
        <h1 className={styles.heading}>Welcome back</h1>
        <form onSubmit={handleClick}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
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
            <label className={styles.label}>Password</label>
            <div className={styles.passwordInputContainer}>
              <input
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
                {showPassword ? "Hide" : "Show"}
              </div>
            </div>
          </div>
          <button type="submit" name="loginButton" className={styles.button}>
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link href="/bookFriend/signup" className={styles.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
