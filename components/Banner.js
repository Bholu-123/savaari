import React, { useState, useRef} from "react";
import styles from "../styles/Banner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookingForm from "./BookingForm";

const Banner = () => {
  const [rideType, setRideType] = useState("Outstation");

  const next = ()  =>{
    sliderRef.current.slickNext();
  };

  const previous = ()  => {
    sliderRef.current.slickPrev();
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: false,
    arrows: false,
  };

  const sliderRef = useRef();
  return (
    <div className={styles.container}>
      <div className={styles.carsImage}>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <h1 className={styles.title}>
              GET 15% OFF YOUR RENTAL Plan your trip now
            </h1>
            <img className={styles.image} src="./car1.png" />
          </div>
          <div>
            <h1 className={styles.title}>
              LUXURY CAR FROM FROM $28 DAY Treat yourself in USA
            </h1>
            <img className={styles.image} src="./car2.png" />
          </div>
        </Slider>
        {/* <div style={{ textAlign: "right" }}>
          <img
            className={styles.arrowIcon}
            onClick={previous}
            src="./bxs-left-arrow.svg"
          />

          <img
            className={styles.arrowIcon}
            onClick={next}
            src="./bxs-right-arrow.svg"
          />
        </div> */}
      </div>
      <div className={styles.bookingWidget}>
        <div className={styles.rideTypeContainer}>
          <span
            className={[
              styles.rideType,
              rideType === "Outstation" ? styles.active : {},
            ].join(" ")}
            onClick={() => setRideType("Outstation")}
          >
            Outstation
          </span>
          <span
            className={[
              styles.rideType,
              rideType === "Local" ? styles.active : {},
            ].join(" ")}
            onClick={() => setRideType("Local")}
          >
            Local
          </span>
          <span
            className={[
              styles.rideType,
              rideType === "Airport" ? styles.active : {},
            ].join(" ")}
            onClick={() => setRideType("Airport")}
          >
            Airport
          </span>
        </div>
        <div>
          <BookingForm val={rideType} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
