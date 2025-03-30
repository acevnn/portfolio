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
        Projects in progress!
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
              <span>
                Pokemon Browsing Cards <ExternalLink size={12} />
              </span>
              <p>
                A mobile-first web application built with Next.js, styled using
                SCSS modules. The app leverages Next.js's Image component for
                optimized image handling and performance. It features a
                responsive design where the navigation transforms into a
                hamburger-triggered drawer menu on mobile devices. Pokémon data
                is fetched server-side from a public API, transformed, and
                passed to the component for rendering. An infinite scroll
                mechanism loads 20 additional Pokémon as the user scrolls,
                enhancing the browsing experience.
              </p>
            </div>
          </div>
        </a>
      </section>
    </>
  );
}
