import { React, useState } from "react";
import ReactSlidy from "react-slidy";
import styles from "../../css/projects.module.css";
import "react-slidy/lib/styles.css";

const SLIDES = [
  "images/slider/lia.jpg",
  "images/slider/carer.jpg",
  "images/slider/blog.jpg",
  "images/slider/jobsboard.jpg",
  "images/slider/dash.jpg",
  "images/slider/form.jpg",
  "images/slider/indexcarer.jpg",
];

const Lia = () => {
  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  return (
    <>
      {actualSlide === 0 ? (
        <h5 className={styles.title}>Live in Carers</h5>
      ) : null}
      {actualSlide === 1 ? (
        <h5 className={styles.title}>Employer/Client Profiles</h5>
      ) : null}
      {actualSlide === 2 ? (
        <h5 className={styles.title}>Tag Searchable Blogs</h5>
      ) : null}
      {actualSlide === 3 ? <h5 className={styles.title}>Jobsboard</h5> : null}
      {actualSlide === 4 ? (
        <h5 className={styles.title}>Admin Dashboard</h5>
      ) : null}
      {actualSlide === 5 ? (
        <h5 className={styles.title}>Json Web-Token Forms</h5>
      ) : null}
      {actualSlide === 6 ? (
        <h5 className={styles.title}>Employer/Client Directory</h5>
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
          <li>Node.js</li>
          <li>Express</li>
          <li>Material UI</li>
          <li>MongoDb</li>
        </ul>
      </div>
      <hr className={styles.hr} />
      {actualSlide === 0 ? (
        <p className={styles.text}>
          Live in Angels is a recruitment database website I built from scratch
          equipped with several automated functions including an admin panel,
          built in rostering system, employer/client directory & employer
          portal.
        </p>
      ) : null}
      {actualSlide === 1 ? (
        <p className={styles.text}>
          The employer/client profiles include; a secure system for storing
          credentials and documentation, a scheduling system allowing the user
          to create, save and send out rosters, a built-in notes widget with
          options for notifications.
        </p>
      ) : null}
      {actualSlide === 2 ? (
        <p className={styles.text}>
          Blog directory with regex querying blog tagging and all images being
          stored in Amazon S3 Bucket.
        </p>
      ) : null}
      {actualSlide === 3 ? (
        <p className={styles.text}>
          Jobs advertising board where potential employees can apply with a
          secure sign-up form and automatically receive email confirmation of
          application.
        </p>
      ) : null}
      {actualSlide === 4 ? (
        <p className={styles.text}>
          An admin panel allowing the user to post jobs, post blogs, search the
          directory for clients and employees and view and update individual
          profiles.
        </p>
      ) : null}
      {actualSlide === 5 ? (
        <p className={styles.text}>
          A secure json-web token interactive sign up form for clients and
          employees.
        </p>
      ) : null}
      {actualSlide === 6 ? (
        <p className={styles.text}>
          A directory for looking up clients and employees with optional
          notification functions.
        </p>
      ) : null}
    </>
  );
};

export default Lia;
