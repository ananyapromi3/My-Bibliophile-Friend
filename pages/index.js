// import Link from "next/link";
// import { useRouter } from "next/router";

// export default function App() {
//   const router = useRouter();
//   // const handleClick = () => {
//   //   router.push("/bookFriend/login");
//   // };
//   return (
//     <div>
//       <h1>WELCOME TO OUR PAGE</h1>
//       {/* <button onClick={() => router.push("/bookFriend/login")}>
//         User login
//       </button> */}
//       <Link href="/bookFriend/login">
//         <button className="btn btn-primary">User login</button>
//       </Link>
//       <Link href="/bookFriend/signup">
//         <button className="btn btn-primary">User signup</button>
//       </Link>
//       <button
//         className="btn btn-primary"
//         onClick={() => router.push("/delivaryMan/login")}
//       >
//         Delivery Man login
//       </button>
//       <button
//         className="btn btn-primary"
//         onClick={() => router.push("/delivaryMan/signup")}
//       >
//         Delivery Man signup
//       </button>
//       <br />
//       <button
//         className="btn btn-primary"
//         onClick={() => router.push("/books/booklist")}
//       >
//         See Book List
//       </button>
//       <br />
//       <button className="btn btn-primary" onClick={() => router.push("/books")}>
//         Search in Book List
//       </button>
//     </div>
//   );
// }

import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css"; // Import the CSS module
// import styles from "/Users/ananyashahrinpromi/Documents/My-Bibliophile-Friend/styles/styles.module.css"

export default function App() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* <h1>WELCOME TO OUR PAGE</h1> */}
      <h1 className={styles["custom-h1"]}>WELCOME TO OUR PAGE</h1>
      <Link href="/bookFriend/login">
        <button className={`${styles.btn} ${styles.primary}`}>
          User login
        </button>
      </Link>
      <Link href="/bookFriend/signup">
        <button className={`${styles.btn} ${styles.primary}`}>
          User signup
        </button>
      </Link>
      <button
        className={`${styles.btn} ${styles.primary}`}
        onClick={() => router.push("/delivaryMan/login")}
      >
        Delivery Man login
      </button>
      <button
        className={`${styles.btn} ${styles.primary}`}
        onClick={() => router.push("/delivaryMan/signup")}
      >
        Delivery Man signup
      </button>
      {/* <br />
      <button
        className={`${styles.btn} ${styles.secondary}`}
        onClick={() => router.push("/books/booklist")}
      >
        See Book List
      </button>
      <br />
      <button
        className={`${styles.btn} ${styles.secondary}`}
        onClick={() => router.push("/books")}
      >
        Search in Book List
      </button> */}
    </div>
  );
}
