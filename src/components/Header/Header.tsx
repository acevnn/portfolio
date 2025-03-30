import { Link } from "react-router-dom";
import GithubIcon from "@/assets/Icons/Github";
import LinkedinIcon from "@/assets/Icons/LinkedinIcon";
import InstagramIcon from "@/assets/Icons/InstagramIcon";
import styles from "./Header.module.scss";
import { SECTION_IDS } from "@/constants/sectionIds";
import { useMediaQuery } from "react-responsive";
import profileImage from "@/assets/NA-Photo.png";
import { motion } from "framer-motion";

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const variants = {
    desktop: {
      x: -50,
      opacity: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
    mobile: {
      x: -50,
      opacity: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };
  return (
    <header className={styles.header}>
      <div className={styles["header__about-wrapper"]}>
        <img
          className={styles["header__profile-picture"]}
          src={profileImage}
          alt="Profice picture of Nikola-Nino Acev"
        />
        <motion.div
          variants={variants}
          initial={isMobile ? "mobile" : "desktop"}
          animate="animate"
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles["header__summary"]}
        >
          <h1>
            <Link to="/">Nino Acev</Link>
          </h1>
          <h2>Front End Engineer</h2>
          <p className={styles["header__intro"]}>
            I build accessible, pixel-perfect and user-friendly digital
            experiences for the web.
          </p>
        </motion.div>
        {!isMobile && (
          <nav>
            <ul className={styles["header__nav"]}>
              <li>
                <a href={`#${SECTION_IDS.ABOUT}`}>About</a>
              </li>
              <li>
                <a href={`#${SECTION_IDS.EXPERIENCE}`}>Experience</a>
              </li>
              <li>
                <a href={`#${SECTION_IDS.PROJECTS}`}>Projects</a>
              </li>
              <li>
                <a href={`#${SECTION_IDS.REVIEWS}`}>Reviews</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <ul className={styles["header__social"]}>
        <li>
          <a
            href="https://github.com/acevnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon width={24} height={24} classname="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nino-acev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon width={24} height={24} classname="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nino.acev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon width={24} height={24} classname="icon" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
