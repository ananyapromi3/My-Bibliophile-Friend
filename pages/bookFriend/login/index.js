// import React from "react";
// import Link from "next/link";
// import { useState } from "react";

// export default function Login() {
//   const [searchResults, setSearchResults] = useState([]);
//   const [loginInfo, setLoginInfo] = useState({
//     email: "",
//     password: "",
//   });
//   const handleClick = async (event) => {
//     try {
//       event.preventDefault();
//       const response = await fetch(`/api/bookFriend/login`, {
//         method: "POST",
//         body: JSON.stringify(loginInfo),
//         headers: {
//           "Contain-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       // console.log(data);
//       setSearchResults(data);
//       if (data[0]) {
//         alert(`You are: ${data[0].FIRSTNAME + " " + data[0].LASTNAME}`);
//       } else {
//         alert(`Wrong information`);
//       }
//     } catch (error) {
//       console.error("Error searching:", error);
//     }
//   };
//   return (
//     <form onSubmit={handleClick}>
//       <div>
//         <h1>Welcome to bookman login</h1>
//         <label>
//           email:
//           <input
//             type="email"
//             onChange={(e) =>
//               setLoginInfo((prevState) => ({
//                 email: e.target.value,
//                 password: prevState.password,
//               }))
//             }
//             name="email"
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             onChange={(e) =>
//               setLoginInfo((prevState) => ({
//                 email: prevState.email,
//                 password: e.target.value,
//               }))
//             }
//             name="password"
//           />
//         </label>
//         <br />
//         <button type="submit" name="loginButton">
//           Login
//         </button>
//       </div>
//     </form>
//   );
// }

import React from "react";
import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [searchResults, setSearchResults] = useState([]);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleClick = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`/api/bookFriend/login`, {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "Contain-Type": "application/json",
        },
      });
      const data = await response.json();
      // console.log(data);
      setSearchResults(data);
      if (data[0]) {
        //alert(`You are: ${data[0].FIRSTNAME + " " + data[0].LASTNAME}`);
        router.push(`/bookFriend/books/${data[0].ID}`);
      } else {
        alert(`Wrong information`);
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  };
  return (
    <form onSubmit={handleClick}>
      <div>
        <h1>Welcome to bookman login</h1>
        <label>
          email:
          <input
            type="email"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: e.target.value,
                password: prevState.password,
              }))
            }
            name="email"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            onChange={(e) =>
              setLoginInfo((prevState) => ({
                email: prevState.email,
                password: e.target.value,
              }))
            }
            name="password"
          />
        </label>
        <br />
        <button type="submit" name="loginButton" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}
