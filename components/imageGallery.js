import React, { useState } from "react";
import styles from "../styles/imageGallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function ImageGallery({
  items,
  showIndex,
  startIndex,
  onClose,
  lazyLoad,
}) {
  const [currentIndex, setCurrentIndex] = useState(startIndex || 0);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  return (
    <div className={styles.imageGallery}>
      <div className={styles.modalContent}>
        <div className={styles.modalImageContainer}>
          <img
            style={{ fontFamily: "Georgia, sans-serif" }}
            src={items[currentIndex].original}
            alt={`Book Condition Photo ${currentIndex + 1} ${
              items[currentIndex]
            }`}
            className={styles.modalImage}
            loading={lazyLoad ? "lazy" : "eager"}
          />
        </div>
        {showIndex && (
          <div
            className={styles.indexIndicator}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            {currentIndex + 1} / {items.length}
          </div>
        )}
      </div>
      <button
        className={styles.prevButton}
        style={{ fontFamily: "Georgia, sans-serif" }}
        onClick={goToPrevious}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        style={{ fontFamily: "Georgia, sans-serif" }}
        className={styles.nextButton}
        onClick={goToNext}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <button
        style={{ fontFamily: "Georgia, sans-serif" }}
        className={styles.closeButton}
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}
