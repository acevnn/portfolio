import styles from "./About.module.scss";
import { ABOUT } from "@/constants";

function About() {
  return (
    <>
      <h2 className={styles["heading-about"]} id="about" data-id="about">
        About
      </h2>
      <section className={styles.about}>
        {ABOUT.map((item) => (
          <p>{item.paragraph}</p>
        ))}
      </section>
    </>
  );
}

export default About;
