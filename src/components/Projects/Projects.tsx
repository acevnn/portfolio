import styles from "./Projects.module.scss";
import { ExternalLink } from "lucide-react";
import { POKEMON, WEBSTORE } from "@/constants";
import React from "react";
import LinkedinIcon from "@/assets/Icons/LinkedinIcon";

interface ProjectData {
  id: number;
  name?: string;
  frontend?: string;
  backend?: string;
  heading?: string;
  paragraph?: string;
}

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
              alt="an image of the link for web store web app"
            />
            <div className={styles["project__external-link"]}>
              <>
                <h4 className={styles["project__project-heading"]}>
                  Pokemon Browsing Cards — In Progress
                  <ExternalLink size={14} />
                </h4>

                <h5 className={styles["project__tech-stack"]}>
                  {WEBSTORE[0].heading}
                </h5>

                <h6 className={styles["project__sub-heading"]}>
                  {POKEMON.find((item) => item.id === 2)?.frontend}
                </h6>

                <ul>
                  {POKEMON.map((data: ProjectData) => {
                    if (data.paragraph) {
                      return (
                        <li
                          key={data.id}
                          className={styles["project__list-item"]}
                        >
                          {data.paragraph}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </>
            </div>
          </div>
        </a>
        <a
          href="https://nino-acev-scandiweb-store.netlify.app/all"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className={styles["project__masonry"]}>
            <img
              src="/project-web-store.png"
              alt="an image of the link for web store web app"
            />
            <div className={styles["project__external-link"]}>
              <>
                <h4 className={styles["project__project-heading"]}>
                  🛍️ Scandiweb Store <ExternalLink size={14} />
                </h4>

                <h5 className={styles["project__tech-stack"]}>
                  {WEBSTORE[0].heading}
                </h5>

                <h6 className={styles["project__sub-heading"]}>
                  {WEBSTORE.find((item) => item.id === 2)?.backend}
                </h6>

                <ul>
                  {WEBSTORE.filter(
                    (item) => item.id <= 3 && item.paragraph,
                  ).map((data) => (
                    <li key={data.id} className={styles["project__list-item"]}>
                      {data.paragraph}
                    </li>
                  ))}
                </ul>

                <h6 className={styles["project__sub-heading"]}>
                  {WEBSTORE.find((item) => item.id === 4)?.frontend}
                </h6>

                <ul>
                  {WEBSTORE.filter((item) => item.id > 3 && item.paragraph).map(
                    (data) => (
                      <li
                        key={data.id}
                        className={styles["project__list-item"]}
                      >
                        {data.paragraph}
                      </li>
                    ),
                  )}
                </ul>
              </>
            </div>
          </div>
        </a>
      </section>
    </>
  );
}
