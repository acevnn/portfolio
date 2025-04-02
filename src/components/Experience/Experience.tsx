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
        <ol className={styles["experience__wrapper"]}>
          {EXPERIENCES.map((experience) => (
            <li key={Math.random()}>
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
          {/*<li>*/}
          {/*  <header>2021 — present</header>*/}
          {/*  <div className={styles["experience__container"]}>*/}
          {/*    <h3 className={styles["experience__heading"]}>*/}
          {/*      Frontend Engineer @ Valtech*/}
          {/*    </h3>*/}
          {/*    <p>*/}
          {/*      Build, style, and ship high-quality websites, design systems and*/}
          {/*      cross platform digital experiences for a diverse array of*/}
          {/*      clients using technologies such as JavaScript, TypeScript,*/}
          {/*      React, Next.js, CSS, AEM(Adobe Experience Manager), Contentful,*/}
          {/*      and more.*/}
          {/*    </p>*/}
          {/*    <Tag items={["AEM", "Contentful", "SCSS"]} />*/}
          {/*  </div>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <header>2021 — present</header>*/}
          {/*  <div className={styles["experience__container"]}>*/}
          {/*    <h3 className={styles["experience__heading"]}>*/}
          {/*      Frontend Engineer @ Valtech*/}
          {/*    </h3>*/}
          {/*    <p>*/}
          {/*      Build, style, and ship high-quality websites, design systems and*/}
          {/*      cross platform digital experiences for a diverse array of*/}
          {/*      clients.*/}
          {/*    </p>*/}
          {/*    <Tag items={["React", "Next.js", "TypeScript", "JavaScript"]} />*/}
          {/*  </div>*/}
          {/*</li>*/}
        </ol>
      </section>
    </>
  );
}
