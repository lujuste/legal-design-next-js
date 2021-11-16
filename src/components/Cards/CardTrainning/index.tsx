import styles from "./styles.module.scss";
import React, { useState } from "react";
import IconTrainning from "./IconTrainning";

export default function CardTrainning({ title, description }) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className={styles.wrapper}>
      <div className={styles.cols}>
        <div
          className={styles.col}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <div className={styles.container}>
            <div className={styles.front}>
              <div className={styles.inner}>
                <IconTrainning />
                <p> {title} </p>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.inner}>
                <p> {description} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
