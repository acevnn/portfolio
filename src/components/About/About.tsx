import styles from "./About.module.scss";

export type AnchorProps = {
  about?: string;
  experience?: string;
  projects?: string;
};

function About({ about }: AnchorProps) {
  return (
    <section id={about}>
      <p className={styles["about__section"]}>
        I’m a developer passionate about crafting accessible, pixel-perfect user
        interfaces that blend thoughtful design with robust engineering. My
        favorite work lies at the intersection of design and development,
        creating experiences that not only look great but are meticulously built
        for performance and usability.{" "}
      </p>

      <p className={styles["about__section"]}>
        Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in
        accessibility. I contribute to the creation and maintenance of UI
        components that power Klaviyo’s frontend, ensuring our platform meets
        web accessibility standards and best practices to deliver an inclusive
        user experience.
      </p>

      <p className={styles["about__section"]}>
        In the past, I've had the opportunity to develop software across a
        variety of settings — from advertising agencies and large corporations
        to start-ups and small digital product studios. Additionally, I also
        released a comprehensive video course a few years ago, guiding learners
        through building a web app with the Spotify API.
      </p>
      <p className={styles["about__section"]}>
        In my spare time, I’m usually climbing, reading, hanging out with my
        wife and two cats, or running around Hyrule searching for Korok seeds K
        o r o k s e e d s .
      </p>
    </section>
  );
}

export default About;
