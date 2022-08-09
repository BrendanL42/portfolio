import { React, useState } from "react";
import ReactSlidy from "react-slidy";
import styles from "../../css/projects.module.css";
import "react-slidy/lib/styles.css";

const SLIDES = [
  "images/slider/h20One.jpg",
  "images/slider/h20Three.jpg",
  "images/slider/h20Two.jpg",
];

const Blockchain = () => {
  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  return (
    <>
      {actualSlide === 0 ? (
        <h5 className={styles.title}>Smart Divers</h5>
      ) : null}
      {actualSlide === 1 ? <h5 className={styles.title}>Diver Form</h5> : null}
      {actualSlide === 2 ? (
        <h5 className={styles.title}>Divers Profile</h5>
      ) : null}
      <ReactSlidy infiniteLoop doAfterSlide={updateSlide} slide={actualSlide}>
        {SLIDES.map((src) => (
          <img
            className={styles.siteImage}
            width="100%"
            height="350px"
            alt="Job Site"
            key={src}
            src={src}
          />
        ))}
      </ReactSlidy>
      <div className={styles.tags}>
        <ul className={styles.tags2}>
          <li>React</li>
          <li>MySQL</li>
          <li>Express</li>
        </ul>
      </div>
      <hr className={styles.hr} />
      {actualSlide === 0 ? (
        <p className={styles.text}>
          Smart Dive Shop Logistics Platform can enable diving operators/shops
          to streamline the booking process for dive courses and fun dives by
          using real-time data. Multiple shops/staff can make bookings/payments,
          pick-up times and locations of divers/guests, assigned
          instructor/guides and securely storing personal information.
        </p>
      ) : null}
      {actualSlide === 1 ? (
        <p className={styles.text}>
          Detailed client sign up form; automated notifications showing the
          individual’s documentation required based on the selected activity and
          divers qualification to ensure compliance with authorising body.
          Calculates a running total during the sign up process.
        </p>
      ) : null}
      {actualSlide === 2 ? (
        <p className={styles.text}>
          Can be used on multiple devices with the added benefit of dynamically
          calculating tanks equipment, gear sizes, meal preferences and specific
          requirements of individual divers.
        </p>
      ) : null}
    </>
  );
};

export default Blockchain;
