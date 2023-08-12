import Link from "next/link";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/bookFriend/login");
  };
  return (
    <div>
      <h1>WELCOME TO OUR PAGE</h1>
      <button onClick={() => router.push("/bookFriend/login")}>
        User login
      </button>
      <button onClick={() => router.push("/bookFriend/signup")}>
        User signup
      </button>
      <button onClick={() => router.push("/delivaryMan/login")}>
        Delivery Man login
      </button>
      <button onClick={() => router.push("/delivaryMan/signup")}>
        Delivery Man signup
      </button>
      <br />
      <button onClick={() => router.push("/books")}>See Book List</button>
      <br />
      <button onClick={() => router.push("/books/search")}>
        Search in Book List
      </button>
    </div>
  );
}
