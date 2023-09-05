import React, { useEffect, useRef } from "react";
import styles from "../styles/dynamicBackground.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function DynamicBackground() {
  const [circles, setCircles] = useState([]);
  const circlesRef = useRef([]);
  const router = useRouter();
  const userId = router.query.userId || router.query.delivaryManId;
  console.log(userId);

  useEffect(() => {
    if (userId == undefined) {
      const createCircle = () => {
        const circle = document.createElement("div");
        circle.classList.add(styles.circle);
        const size = Math.random() * 100 + 50;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${x}px`;
        circle.style.top = `${y - 150}px`;
        return circle;
      };

      const animateCircles = () => {
        circlesRef.current = circlesRef.current.map((circle) => {
          const currentX = parseFloat(circle.style.left);
          const newX = currentX + 1; 
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
    }
  }, []);

  return null;
}
