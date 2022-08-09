import styleFunctionSx from "@mui/system/styleFunctionSx";
import React from "react";
import styles from "../styles/VehicalCard.module.css";

const VehicalsCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>our vehical</h2>
        <span className={styles.underline}></span>
      </div>
      <div className={styles.row}>
        <div className={styles.categoryBlock}>
          <div className={styles.categoryImg}>
            <img src="./card1.png" alt="" className={styles.image} />
          </div>
          <div className={styles.rating}>
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
          </div>
          <h6>
            start from <span>$25 / day</span>
          </h6>
          <h4>Classic</h4>
          <h5>book and instant 10% discount</h5>
          <a href="cab-booking.html" className={styles.btn}>
            book $45
          </a>
        </div>

        <div className={styles.categoryBlock}>
          <div className={styles.categoryImg}>
            <img src="./card1.png" alt="" className={styles.image} />
          </div>
          <div className={styles.rating}>
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
          </div>
          <h6>
            start from <span>$25 / day</span>
          </h6>
          <h4>Buisness</h4>
          <h5>book and instant 10% discount</h5>
          <a href="cab-booking.html" className={styles.btn}>
            book $45
          </a>
        </div>

        <div className={styles.categoryBlock}>
          <div className={styles.categoryImg}>
            <img src="./card1.png" alt="" className={styles.image} />
          </div>
          <div className={styles.rating}>
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
          </div>
          <h6>
            start from <span>$25 / day</span>
          </h6>
          <h4>Vip</h4>
          <h5>book and instant 10% discount</h5>
          <a href="cab-booking.html" className={styles.btn}>
            book $45
          </a>
        </div>

        <div className={styles.categoryBlock}>
          <div className={styles.categoryImg}>
            <img src="./card1.png" alt="" className={styles.image} />
          </div>
          <div className={styles.rating}>
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
            <img src="./bxs-star (1).svg" />
          </div>
          <h6>
            start from <span>$25 / day</span>
          </h6>
          <h4>Van</h4>
          <h5>book and instant 10% discount</h5>
          <a href="cab-booking.html" className={styles.btn}>
            book $45
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicalsCard;
