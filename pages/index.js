import Link from "next/link";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  // const handleClick = () => {
  //   router.push("/bookFriend/login");
  // };
  return (
    <div>
      <h1>WELCOME TO OUR PAGE</h1>
      {/* <button onClick={() => router.push("/bookFriend/login")}>
        User login
      </button> */}
      <Link href="/bookFriend/login">
        <button className="btn btn-primary">User login</button>
      </Link>
      <Link href="/bookFriend/signup">
        <button className="btn btn-primary">User signup</button>
      </Link>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/delivaryMan/login")}
      >
        Delivery Man login
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/delivaryMan/signup")}
      >
        Delivery Man signup
      </button>
      <br />
      <button
        className="btn btn-primary"
        onClick={() => router.push("/books/booklist")}
      >
        See Book List
      </button>
      <br />
      <button className="btn btn-primary" onClick={() => router.push("/books")}>
        Search in Book List
      </button>
    </div>
  );
}
