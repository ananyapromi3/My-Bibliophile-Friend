import React from "react";
import styles from "../../../styles/aboutUs.module.css";
import Menu from "../../../components/menuDelMan";
import About from "../../../components/aboutUs";

export default function AboutUs() {
  const activeMenu = "about";
  return (
    <>
      <Menu active={activeMenu} />
      <About />
    </>
  );
}
