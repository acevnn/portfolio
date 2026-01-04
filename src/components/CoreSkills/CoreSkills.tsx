import { CORE_SKILLS } from "@/constants";
import styles from "./CoreSkills.module.scss";

export default function CoreSkills() {
  return (
    <>
      <h2 className={styles["skill-title"]}>Core Skills</h2>
      <section className={styles.skill}>
        <ul className={styles["skill__skills"]}>
          {CORE_SKILLS.map((skill) => (
            <div className={styles["skill__container"]}>
              <h3 className={styles["skill__heading"]}>{skill.heading}:</h3>
              <p>{skill.paragraph}</p>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
}
