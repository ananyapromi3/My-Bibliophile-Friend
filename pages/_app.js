// // import "../styles/globals.css";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { useState } from "react";
// // import "regenerator-runtime/runtime";
// // import styles from "../styles/globals.css";

// // export default function App({ Component, pageProps }) {
// //   const [user, setUser] = useState(null);
// //   return (
// //     // <>
// //     //   <div>
// //     //     <h1>MY BIBLIOPHILE FRIEND</h1>
// //     //   </div>
// //     //   <hr />
// //     //   <hr />
// //     //   <br />
// //     //   <br />
// //     //   <Component {...pageProps} />
// //     // </>
// //     <div className={styles.darkContainer}>
// //       <h1 className={`${styles.title} ${styles.darkTitle}`}>
// //         MY BIBLIOPHILE FRIEND
// //       </h1>
// //       <Component {...pageProps} />
// //     </div>
// //   );
// // }

// import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import "regenerator-runtime/runtime";
// import styles from "../styles/globals.css"; // Import the global CSS file

// export default function App({ Component, pageProps }) {
//   const [user, setUser] = useState(null);
//   return (
//     <div className="darkContainer">
//       <h1 className="title darkTitle">
//         MY BIBLIOPHILE FRIEND
//       </h1>
//       <Component {...pageProps} />
//     </div>
//   );
// }


import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "regenerator-runtime/runtime";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  return (
    <div className="darkContainer">
      <h1 className="title darkTitle">MY BIBLIOPHILE FRIEND</h1>
      <Component {...pageProps} />
    </div>
  );
}
