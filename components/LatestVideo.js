import Link from "next/link";
import React from "react";
import styles from "../styles/LatestVideo.module.css";

const LatestVideo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Latest Video</h2>
        <span className={styles.underline}></span>
      </div>
      <div className={styles.row}>
        <div className={styles.ticketBox}>
          <div className={styles.content}>
            <div className={styles.detail}>
              <h4>
                <span>$102</span> / per day
              </h4>
              <h3>Rica Cab is great taxi servicing agency !</h3>
              <p>
                Lorem Ipsum is the simply dummy text of the printing is of and
                type the setting the industry. Lorem Ipsum of is has since
                the..........
              </p>
              <Link href="" className={styles.btn}>
                <span className={styles.btn}>contact us</span>
              </Link>
            </div>
            <div>
              <img src="./barcode.png" className={styles.barcodeImage} alt="" />
            </div>
          </div>
          <div className={styles.imageBox}>
            <img src="./video-image.jpg" className={styles.videoImg} alt="" />
            <Link href="">
              <span className={styles.videoIcon}>
                <img
                  className={styles.youtubeImage}
                  src="./bxs-right-arrow.svg"
                />
              </span>
            </Link>
          </div>
          <div className={styles.ticketTitle}>
            <h6>driver details</h6>
            <span>
              <img className={styles.crownImage} src="./bx-crown.svg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVideo;
