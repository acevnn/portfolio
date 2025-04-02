import styles from "./About.module.scss";
import { ABOUT } from "@/constants";

function About() {
  return (
    <>
      <h2 className={styles["heading-about"]} id="about" data-id="about">
        About
      </h2>
      <section className={styles.about}>
        <ul>
          {ABOUT.map((item) => (
            <li key={item.id}>
              {item.id === 3 ? (
                <>
                  Before transitioning fully into frontend after graduating, I
                  worked as a cybersecurity engineer—and had the chance to
                  develop a website for the{" "}
                  <a
                    href="https://ia.gov.mk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Intelligence Agency of North Macedonia
                  </a>
                  .
                </>
              ) : (
                item.paragraph
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default About;
