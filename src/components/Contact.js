import { React, useState } from "react";
import styles from "../css/contact.module.css";
import emailjs from "emailjs-com";
import Resume from "../assets/brendan-little-resume.pdf";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [other, setOther] = useState(false);
  const [validation, setValidation] = useState(false);
  const [once, setOnce] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!once) {
      if (name && email && phone && message && !other) {
        setOnce(true);
        emailjs
          .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_USER_ID
          )
          .then(
            (result) => {
              setResponse("I'll be in touch soon");
              setTimeout(() => {
                setResponse("");
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
              }, 4000);
            },
            (error) => {
              setResponse(error.text);
              setTimeout(() => {
                setResponse("");
                setOnce(false);
              }, 4000);
            }
          );
      } else {
        setValidation(true);
        setResponse("Please don't leave anything blank");
      }
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setValidation(false);
        setResponse("");
        setName(e.target.value);
        break;
      case "email":
        setValidation(false);
        setResponse("");
        setEmail(e.target.value);
        break;
      case "phone":
        setValidation(false);
        setResponse("");
        setPhone(e.target.value);
        break;
      case "message":
        setValidation(false);
        setResponse("");
        setMessage(e.target.value);
        break;
      case "other":
        setOther(e.target.checked);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* <div className={styles.stars}></div>
      <div className={styles.twinkling}></div> */}
      <div className={styles.wrapper}>
        <div className={styles.wrapper2}>
          <h2 className={styles.headers}>Contact Me</h2>

          <p className={styles.text}>
            I hope you have enjoyed viewing my portfolio, please feel free to
            download by resume below.
          </p>
          <h6 className={styles.cv}>Download my resume:</h6>

          <a
            className={styles.link}
            rel="noreferrer"
            href={Resume}
            download="Brendan-little-resume"
            target="_blank"
          >
            Brendan-little-resume.pdf
          </a>
          <h6 className={styles.email}>Email me directly:</h6>
          <a
            href="mailto:brendanlittle42@gmail.com"
            className={styles.linkEmail}
          >
            brendanlittle42@gmail.com
          </a>
        </div>

        <form method="get" onSubmit={handleSubmit} className={styles.form}>
          <label>
            <p style={{ color: validation && !name ? "red" : "#FFF" }}>Name:</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>
            <p style={{ color: validation && !email ? "red" : "#FFF" }}>
              Email:
            </p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label>
            <p style={{ color: validation && !phone ? "red" : "#FFF" }}>
              Phone:
            </p>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </label>
          <label>
            <p style={{ color: validation && !message ? "red" : "#FFF" }}>
              Message:
            </p>
            <textarea
              className={styles.textArea}
              rows="8"
              type="text"
              name="message"
              value={message}
              onChange={handleChange}
            />
          </label>
          <p className={styles.response}>{response}</p>
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <input
        className={styles.pot}
        type="checkbox"
        name="other"
        value={other}
        onChange={handleChange}
      />
    </>
  );
};

export default Contact;
