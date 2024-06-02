import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {/* <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form> */}

      <p>
        Phone no:{" "}
        <a href="tel:+917859926143">
          <button className="hover">+91 78599 26143</button>
        </a>
      </p>
      <br />
      <p>
        Email:{" "}
        <a href="mailto:mit_joshi@outlook.com">
          <button className="hover">mit_joshi@outlook.com</button>
        </a>
      </p>
    </section>
  );
}

export default Contact;
