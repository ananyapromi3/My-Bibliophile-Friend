import React from "react";
import Link from 'next/link';
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleClick() {
    console.log(`You are ` + ` ${email}`);
    <div>You are ` + ` ${email}</div>
  }
  return (
    <div>
      <h1>Welcome to bookman login</h1>
      <label>
        email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          // defaultValue="email"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          // defaultValue="password"
        />
      </label>
      <br />
      <button name="loginButton" onClick={handleClick}>
        Login
      </button>
    </div>
  );
}
