import { React } from "react";
import styles from "../css/projects.module.css";
import Lia from "../components/sites/Lia";
import Bbb from "../components/sites/Bbb";
import Blockchain from "../components/sites/Blockchain";
import H20 from "../components/sites/h2o";

const Projects = () => {
  return (
    <>
      <h2 className={styles.header}>My Work</h2>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <Lia />

          <div className={styles.viewWrapper}>
            <a href={"https://github.com/Brendan42L/LIA-DEMO"}>
              <img
                className={styles.view}
                src="images/code.svg"
                alt="code"
                width="43"
                height="auto"
              />
            </a>
            <a href={"https://lia-demo-gi332.ondigitalocean.app/signin"}>
              <img
                className={styles.view}
                src="images/binoculars.svg"
                alt="binoculars"
                width="43"
                height="auto"
              />
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <Bbb />
          <div className={styles.viewWrapper}>
            <a href={"https://github.com/Brendan42L/BBB"}>
              <img
                className={styles.view}
                src="images/code.svg"
                alt="code"
                width="43"
                height="auto"
              />
            </a>
            <a href={"https://bbb-yz3t4.ondigitalocean.app/"}>
              <img
                className={styles.view}
                src="images/binoculars.svg"
                alt="binoculars"
                width="43"
                height="auto"
              />
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <Blockchain />
          <div className={styles.viewWrapper}>
            <a href={"https://github.com/Brendan42L/crypto-strippers"}>
              <img
                className={styles.view}
                src="images/code.svg"
                alt="code"
                width="43"
                height="auto"
              />
            </a>
            <a href="https://utopianwebdevelopment.com/portfolio">
              <img
                className={styles.view}
                src="images/binoculars.svg"
                alt="binoculars"
                width="43"
                height="auto"
              />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <H20 />
          <div className={styles.viewWrapper}>
            <a href={"https://github.com/Brendan42L/h20-booking"}>
              <img
                className={styles.view}
                src="images/code.svg"
                alt="code"
                width="43"
                height="auto"
              />
            </a>
            <a href="https://utopianwebdevelopment.com/portfolio">
              <img
                className={styles.view}
                src="images/binoculars.svg"
                alt="binoculars"
                width="43"
                height="auto"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
