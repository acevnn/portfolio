import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <>
      <h2 id="projects">Projects in progress!</h2>
      <section className={styles.project}>
        <a
          href="https://firstgenn.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className={styles["project__masonry"]}>
            <h4>Link to pokemon first generation app.</h4>
          </div>
        </a>
        <a
          href="https://firstgenn.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className={styles["project__masonry"]}>
            <h4>Link to pokemon first generation app.</h4>
          </div>
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className={styles["project__masonry"]}>
            <h4>google</h4>
          </div>
        </a>
      </section>
    </>
  );
}
