import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleClick = async () => {
    // console.log(`You are ` + ` ${email}`);
    // <div>You are ` + ` ${email}</div>
    try {
      const response = await fetch(`/api/bookFriend/login`, {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "Contain-Type": "application/json",
        },
      });
      const data = await response.json();
      // setSearchResults(data);
      console.log(data);
      // setSearchResults(data);
      // console.log("hi" + data);
    } catch (error) {
      console.error("Error searching:", error);
    }
    console.log(data);
  };
  return (
    <form onSubmit={handleClick}>
      <div>
        <h1>Welcome to bookman login</h1>
        <label>
          email:
          <input
            type="email"
            // value={email}
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: e.target.value,
                password: prevState.password,
              }))
            }
            name="email"
            // defaultValue="email"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            // value={password}
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: prevState.email,
                password: e.target.value,
              }))
            }
            name="password"
            // defaultValue="password"
          />
        </label>
        <br />
        <button type="submit" name="loginButton">
          Login
        </button>
      </div>
    </form>
  );
}
