import React from 'react';
import styles from '../styles/BookingDeals.module.css';

const BookingDeals = () => {
    return (
      <div className={styles.container}>
        <div class={styles.title}>
          <h2>deals on booking</h2>
          <span className={styles.underline}></span>
        </div>
        <div class={styles.dealsRow}>
          <div class={styles.dealsColumn}>
            <div className={styles.deals}>
              <div class={styles.dealsContent}>
                <div class={styles.dealsDetail}>
                  <h3>marseille</h3>
                  <h2>
                    $102 <span> / per day</span>
                  </h2>
                </div>
                <img src="./barcode.png" alt="" class={styles.barcode} />
              </div>
              <div class={styles.dealsImage}>
                <img src="./video-image.jpg" alt="" className={styles.image} />
              </div>
            </div>
          </div>

          <div className={styles.dealsColumn}>
            <div className={styles.deals}>
              <div class={styles.dealsContent}>
                <div class={styles.dealsDetail}>
                  <h3>marseille</h3>
                  <h2>
                    $102 <span> / per day</span>
                  </h2>
                </div>
                <img src="./barcode.png" alt="" class={styles.barcode} />
              </div>
              <div class={styles.dealsImage}>
                <img src="./video-image.jpg" alt="" className={styles.image} />
              </div>
            </div>
          </div>

          <div className={styles.dealsColumn}>
            <div className={styles.deals}>
              <div class={styles.dealsContent}>
                <div class={styles.dealsDetail}>
                  <h3>marseille</h3>
                  <h2>
                    $102 <span> / per day</span>
                  </h2>
                </div>
                <img src="./barcode.png" alt="" class={styles.barcode} />
              </div>
              <div class={styles.dealsImage}>
                <img src="./video-image.jpg" alt="" className={styles.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BookingDeals
