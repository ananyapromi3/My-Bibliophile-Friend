import React, { useEffect, useRef } from "react";
import styles from "../styles/dynamicBackground.module.css";
import { useState } from "react";

export default function DynamicBackground() {
  const [circles, setCircles] = useState([]);
  const circlesRef = useRef([]);

  useEffect(() => {
    const createCircle = () => {
      const circle = document.createElement("div");
      circle.classList.add(styles.circle);
      const size = Math.random() * 100 + 50;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      return circle;
    };

    const animateCircles = () => {
      circlesRef.current = circlesRef.current.map((circle) => {
        const currentX = parseFloat(circle.style.left);
        const newX = currentX + 1; // Adjust the speed as needed
        if (newX > window.innerWidth) {
          circle.style.left = "0";
        } else {
          circle.style.left = `${newX}px`;
        }
        return circle;
      });

      requestAnimationFrame(animateCircles);
    };

    const initialCircles = [];
    for (let i = 0; i < 3; i++) {
      const circle = createCircle();
      initialCircles.push(circle);
      document.body.appendChild(circle);
    }
    circlesRef.current = initialCircles;

    animateCircles();
  }, []);

  return null;
}
