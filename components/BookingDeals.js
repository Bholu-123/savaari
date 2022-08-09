import React from "react";
import styles from "../styles/BookingDeals.module.css";

const BookingDeals = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>deals on booking</h2>
        <span className={styles.underline}></span>
      </div>
      <div className={styles.dealsRow}>
        <div className={styles.dealsColumn}>
          <div className={styles.deals}>
            <div className={styles.dealsContent}>
              <div className={styles.dealsDetail}>
                <h3>marseille</h3>
                <h2>
                  $102 <span> / per day</span>
                </h2>
              </div>
              <img src="./barcode.png" alt="" className={styles.barcode} />
            </div>
            <div className={styles.dealsImage}>
              <img src="./video-image.jpg" alt="" className={styles.image} />
            </div>
          </div>
        </div>

        <div className={styles.dealsColumn}>
          <div className={styles.deals}>
            <div className={styles.dealsContent}>
              <div className={styles.dealsDetail}>
                <h3>marseille</h3>
                <h2>
                  $102 <span> / per day</span>
                </h2>
              </div>
              <img src="./barcode.png" alt="" className={styles.barcode} />
            </div>
            <div className={styles.dealsImage}>
              <img src="./video-image.jpg" alt="" className={styles.image} />
            </div>
          </div>
        </div>

        <div className={styles.dealsColumn}>
          <div className={styles.deals}>
            <div className={styles.dealsContent}>
              <div className={styles.dealsDetail}>
                <h3>marseille</h3>
                <h2>
                  $102 <span> / per day</span>
                </h2>
              </div>
              <img src="./barcode.png" alt="" className={styles.barcode} />
            </div>
            <div className={styles.dealsImage}>
              <img src="./video-image.jpg" alt="" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDeals;
