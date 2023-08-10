import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleClick() {
    console.log(`You are ` + ` ${email}`);
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
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
