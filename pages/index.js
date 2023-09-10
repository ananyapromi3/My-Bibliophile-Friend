import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css"; 
import dynamic from "next/dynamic";
import DynamicBackground from "../components/dynamicBackground";
import { useState, useEffect } from "react";

export default function App() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <DynamicBackground />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <img src="pictures/logo1.png" className={styles.logo} />
          <h1
            className={styles.pageHeading}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            There Is No Friend
            <br />
            As Loyal As A Book
          </h1>
          <p
            className={styles.quote}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            You are not done with a book until you pass it to another reader {" "}
          </p>
          <div
            className={styles.buttonContainer}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <Link href="/bookFriend/login">
              <button
                className={styles.button}
                style={{ fontFamily: "Georgia, sans-serif" }}
              >
                Continue as
                <br /> Book Friend
              </button>
            </Link>
            <Link href="/delivaryMan/login">
              <button
                className={styles.button}
                style={{ fontFamily: "Georgia, sans-serif" }}
              >
                Continue as Delivery Man
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
