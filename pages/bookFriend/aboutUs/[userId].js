import React from "react";
import styles from "../../../styles/aboutUs.module.css";
import Menu from "../../../components/menu";
import About from "../../../components/aboutUs";
import { useRouter } from "next/router";

export default function AboutUs() {
  const router = useRouter();
  const userId = router.query.userId;
  const activeMenu = "about";
  console.log(userId);
  return (
    <>
      <Menu active={activeMenu} />
      <About />
    </>
  );
}
