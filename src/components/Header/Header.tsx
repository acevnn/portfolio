import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import GithubIcon from "../../assets/Icons/Github.tsx";
import LinkedinIcon from "../../assets/Icons/LinkedinIcon.tsx";
import InstagramIcon from "../../assets/Icons/InstagramIcon.tsx";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header__about-me-wrapper"]}>
        <h1>
          <Link to="/">Nino Acev</Link>
        </h1>
        <h2>Front End Engineer</h2>
        <p>
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <nav className={styles["header__nav"]}>
          <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
          </ul>
        </nav>
      </div>
      <ul className={styles["header__social"]}>
        <li>
          <a
            href="https://github.com/acevnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon width={32} height={32} classname="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nino-acev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon width={32} height={32} classname="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nino.acev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon width={32} height={32} classname="icon" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
