import "../styles/global.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  return (
    <>
      <div>My bibliophile friend</div>
      <Component {...pageProps} />
    </>
  );
}
