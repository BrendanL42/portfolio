import { React, useState} from "react";
import ReactSlidy from "react-slidy";
import styles from "../../css/projects.module.css";
import "react-slidy/lib/styles.css";

const SLIDES = [
  "images/slider/bbb.jpg",
  "images/slider/prices.jpg",
  "images/slider/contact.jpg",
];

const Bbb = () => {
  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  return (
    <>
      <h5 className={styles.title}>Beautician</h5>
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
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>PHP</li>
        </ul>
      </div>
      <p className={styles.text}>
        A light and elegant solution for a beautician business. Built with no
        frameworks and a contact form.
      </p>
    </>
  );
};

export default Bbb;
