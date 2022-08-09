import { React, useState } from "react";
import ReactSlidy from "react-slidy";
import styles from "../../css/projects.module.css";
import "react-slidy/lib/styles.css";

const SLIDES = [
  "images/slider/stripperTwo.jpg",
  "images/slider/stripperOne.jpg",
  "images/slider/stripperThree.jpg",
  "images/slider/stripperFour.jpg",
  "images/slider/stripperFive.jpg",
];

const Blockchain = () => {
  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  return (
    <>
      {actualSlide === 0 ? (
        <h5 className={styles.title}>Blockchain Strippers</h5>
      ) : null}
      {actualSlide === 1 ? (
        <h5 className={styles.title}>Advanced Directory</h5>
      ) : null}
      {actualSlide === 2 ? (
        <h5 className={styles.title}>Decentralised Booking</h5>
      ) : null}
      {actualSlide === 3 ? <h5 className={styles.title}>Live Chat</h5> : null}
      {actualSlide === 4 ? (
        <h5 className={styles.title}>QR Code Check In</h5>
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
        <ul>
          <li>Next.js</li>
          <li>Solidity</li>
          <li>Node.js</li>
          <li>Sockets</li>
          <li>MongoDb</li>
        </ul>
      </div>
      <hr className={styles.hr} />
      {actualSlide === 0 ? (
        <p className={styles.text}>
          A first of its kind Dapp for the adult entertainment industry, take
          advantage of a decentralised booking system using smart contracts to
          facilitate the holding of deposits, the distribution of funds to
          models using QR code check in technology as well as a weekly lottery
          with automatic entries.
        </p>
      ) : null}
      {actualSlide === 1 ? (
        <p className={styles.text}>
          A secure login and sign up system, a smart model directory using a
          weighted point system to prioritise models with higher memberships
          levels or models with more completed QR code check ins. This page is
          also equipped with advanced searching capabilities.
        </p>
      ) : null}
      {actualSlide === 2 ? (
        <p className={styles.text}>
          Each model has the ability to add custom crypto payment buttons to
          their profile, this Dapp also comes with a unique decentralised
          booking system which auto calculates deposits and services costs with
          real time data from an oracle.
        </p>
      ) : null}
      {actualSlide === 3 ? (
        <p className={styles.text}>
          A live group chat for bookings built using socket technology with
          email and realtime notifications and the ability to interconnect your
          profile with other models to streamline the booking process for
          clients.
        </p>
      ) : null}
      {actualSlide === 4 ? (
        <p className={styles.text}>
          A booking management system and the ability to apply for jobs using
          the active jobs-board. Once the QR code has been scanned this triggers
          payments, transfer of deposit and automated entries into the lottery
          as a reward incentive for using the system. 5 major currencies are
          supported with QR code technology.
        </p>
      ) : null}
    </>
  );
};

export default Blockchain;
