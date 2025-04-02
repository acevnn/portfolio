import styles from "./Projects.module.scss";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <>
      <h2
        className={styles["heading-project"]}
        id="projects"
        data-id="projects"
      >
        Projects
      </h2>
      <section className={styles.project}>
        <a
          href="https://firstgenn.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className={styles["project__masonry"]}>
            <img
              src="/pokemon1stgen.png"
              alt="an image of the link for pokemon first generation web app"
            />
            <div className={styles["project__external-link"]}>
              <h4>
                Pokemon Browsing Cards — In Progress <ExternalLink size={12} />
              </h4>
              <p>
                A mobile-first web application built with Next.js, styled using
                SCSS modules. The app leverages Next.js Image component for
                optimized image handling and performance. It features a
                responsive design where the navigation transforms into a
                hamburger-triggered drawer menu on mobile devices. Pokémon data
                is fetched server-side from a public API, transformed, and
                passed to the component for rendering. An infinite scroll
                mechanism loads 20 additional Pokémon as the user scrolls,
                enhancing the browsing experience and helping manage the data
                not loading everything at once.
              </p>
            </div>
          </div>
        </a>
      </section>
    </>
  );
}
