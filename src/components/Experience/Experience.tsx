import styles from "./Experience.module.scss";
import { AnchorProps } from "../About/About.tsx";

export default function Experience({ experience }: AnchorProps) {
  return (
    <>
      <h2 id={experience}>Experience in progress!</h2>
      <section>
        <div className={styles.experience}>
          <header>2021 — present</header>
          <div className={styles["experience__wrapper"]}>
            <h4>Associate/Mid-level Frontend Engineer @ Valtech</h4>
            <p>
              Build and maintain web applications for various clients and craft
              solutions for the needs. Working as a service company, Valtech I
              had the opportunity to work on diverse projects in different
              teams.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
