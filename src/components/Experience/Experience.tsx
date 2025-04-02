import styles from "./Experience.module.scss";
import { EXPERIENCES } from "@/constants";
import Tag from "@/components/Tag/Tag";

export default function Experience() {
  console.table(EXPERIENCES);

  return (
    <>
      <h2
        className={styles["heading-experience"]}
        id="experience"
        data-id="experience"
      >
        Experience
      </h2>
      <section className={styles.experience}>
        <ul className={styles["experience__wrapper"]}>
          {EXPERIENCES.map((experience) => (
            <li key={experience.id}>
              <header>{experience.time}</header>
              <div className={styles["experience__container"]}>
                <h3 className={styles["experience__heading"]}>
                  {experience.role}
                </h3>
                <p>{experience.paragraph}</p>
                <Tag items={experience.tags} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
