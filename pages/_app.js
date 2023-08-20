import "../styles/global.css";
import { useState } from "react";
import 'regenerator-runtime/runtime'

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  return (
    <>
      <div>
        <h1>MY BIBLIOPHILE FRIEND</h1>
      </div>
      <hr />
      <hr />
      <br />
      <br />
      <Component {...pageProps} />
    </>
  );
}
