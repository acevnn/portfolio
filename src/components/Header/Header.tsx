import { Link } from "react-router-dom";
import GithubIcon from "@/assets/Icons/GithubIcon";
import LinkedinIcon from "@/assets/Icons/LinkedinIcon";
import styles from "./Header.module.scss";
import { sectionIds } from "@/constants";
import { useMediaQuery } from "react-responsive";
import profileImage from "@/assets/NA-Photo.png";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { useScrollSpy } from "@/hooks";
// import { animate, createScope, createSpring } from "animejs";
// import { useEffect, useRef } from "react";

function Header() {
  // const root = useRef<HTMLDivElement | null>(null);
  // const scope = useRef<ReturnType<typeof createScope> | null>(null);
  // const profilePictureRef = useRef<HTMLImageElement | null>(null);
  //
  // console.log(Object.keys(animate));
  //
  // useEffect(() => {
  //   if (!root.current || !profilePictureRef.current) return;
  //
  //   scope.current = createScope({ root: root.current }).add((scope) => {
  //     animate(profilePictureRef.current!, {
  //       scale: [
  //         { to: 1.25, ease: "inOut(3)", duration: 200 },
  //         { to: 1, ease: createSpring({ stiffness: 300 }) },
  //       ],
  //       loop: true,
  //       loopDelay: 250,
  //     });
  //   });
  //
  //   return () => scope.current?.revert();
  // }, []);

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

  const { activeSection, manuallySetActive } = useScrollSpy(sectionIds);

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
          <h2 className={styles["header__heading-intro"]}>
            Front End Developer
          </h2>
          <p className={styles["header__intro"]}>
            I build accessible, pixel-perfect and user-friendly digital
            experiences for the web.
          </p>
          <div className={styles["header__cta-wrapper"]}>
            <a
              className={styles["header__cta"]}
              href="mailto:ninoacev@gmail.com"
            >
              Get in Touch
            </a>
            <span className={styles["header__circle"]} />
            <span>Available for Hire</span>
          </div>
        </motion.div>
        {!isMobile && (
          <nav>
            <ul className={styles["header__nav"]}>
              {sectionIds.map((id) => (
                <li className={styles["header__list-item"]} key={id}>
                  <a
                    className={`${styles["header__link"]} ${activeSection === id ? styles["header__link--active"] : ""}`}
                    href={`#${id}`}
                    onClick={() => manuallySetActive(id)}
                  >
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <ul className={styles["header__social"]}>
          <li>
            <a
              className={styles["header__social-icon"]}
              href="https://github.com/acevnn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon width={24} height={24} classname="icon" />
            </a>
          </li>
          <li>
            <a
              className={styles["header__social-icon"]}
              href="https://www.linkedin.com/in/nino-acev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon width={24} height={24} classname="icon" />
            </a>
          </li>
          <li>
            <a
              className={styles["header__resume"]}
              href="/Nikola-Nino%20Acev_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
