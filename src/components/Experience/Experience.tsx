import { useEffect, useRef } from "react";

import styles from "./Experience.module.scss";
import { EXPERIENCES } from "@/constants";
import Tag from "@/components/Tag/Tag";

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const start = window.innerHeight;
      const end = -rect.height;

      const progress = Math.min(
        100,
        Math.max(0, ((start - rect.top) / (start - end)) * 100),
      );

      section.style.setProperty("--progress", `${progress}%`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <h2
        className={styles["heading-experience"]}
        id="experience"
        data-id="experience"
      >
        Professional Experience
      </h2>

      <section ref={sectionRef} className={styles.experience}>
        <div className={styles.progress} aria-hidden />
        <ul className={styles["experience__wrapper"]}>
          {EXPERIENCES.map((experience) => (
            <li key={experience.id} className={`reveal`}>
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
