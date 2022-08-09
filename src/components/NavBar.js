import { React, useState } from "react";
import styles from "../css/navBar.module.css";
import cx from "classnames";
import { Link } from "react-scroll";

const NavBar = () => {
  const [menuStatus, setMenu] = useState(false);
  const [over100px, setOver100px] = useState(false);

  const handleClick = () => {
    setMenu(!menuStatus);
  };

  window.onscroll = function (e) {
    if (window.scrollY > 100) {
      setOver100px(true);
    }
    if (window.scrollY < 100) {
      setOver100px(false);
    }
  };

  return (
    <nav
      style={{
        backgroundColor: over100px ? "#131313e1" : "#131313",
        borderBottom: "1px solid #ffffff49",
      }}
      className={
        menuStatus
          ? cx(styles.NavBarItems, styles.NavBarItemsActive)
          : cx(styles.NavBarItems)
      }
    >
      <div className={styles.menuicon} onClick={handleClick}>
        <i className={menuStatus ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      <a href="mailto:brendanlittle42@gmail.com">
        <img
          className={styles.navbarlogo}
          src={"images/email.svg"}
          alt="logo"
          width="auto"
          height="58"
        />
      </a>

      <ul
        className={
          menuStatus ? cx(styles.navMenu, styles.active) : cx(styles.navMenu)
        }
      >
        <li>
          <Link
            onClick={() => setMenu(false)}
            to="home"
            spy={true}
            smooth={true}
            offset={-120}
            duration={1000}
            activeClass="activeHome"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setMenu(false)}
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            activeClass="activeAbout {
              "
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenu(false)}
            to="technologies"
            spy={true}
            smooth={true}
            offset={-160}
            duration={1000}
            activeClass="activeTec"
          >
            Technologies
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setMenu(false)}
            to="projects"
            spy={true}
            smooth={true}
            offset={-131}
            duration={1000}
            activeClass="activeProjects"
          >
            Work
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setMenu(false)}
            to="contact"
            spy={true}
            smooth={true}
            offset={100}
            duration={1000}
            activeClass="activeContact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
