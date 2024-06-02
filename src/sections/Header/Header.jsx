import styles from "./HeaderStyles.module.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <BrowserRouter>
      <section id="header" className={styles.container}>
        <header className={styles.topHeader}>
          <nav className={styles.topNavbar}>
            <Link to='#hero' smooth>Home</Link>
            <Link to='#projects' smooth>Projects</Link>
            <Link to='#skills' smooth>Skills</Link>
            <Link to='#contact' smooth>Contact</Link>
          </nav>
        </header>
      </section>
    </BrowserRouter>
  );
};

export default Header;
