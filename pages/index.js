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
        <button>User login</button>
      </Link>
      <Link href="/bookFriend/signup">
        <button>User signup</button>
      </Link>
      <button onClick={() => router.push("/delivaryMan/login")}>
        Delivery Man login
      </button>
      <button onClick={() => router.push("/delivaryMan/signup")}>
        Delivery Man signup
      </button>
      <br />
      <button onClick={() => router.push("/books/booklist")}>
        See Book List
      </button>
      <br />
      <button onClick={() => router.push("/books")}>Search in Book List</button>
    </div>
  );
}
