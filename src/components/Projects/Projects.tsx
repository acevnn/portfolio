import { AnchorProps } from "../interfaces.ts";

export default function Projects({ projects }: AnchorProps) {
  return (
    <>
      <h1 id={projects}>Projects in progress!</h1>
      <section>
        <span>
          <a
            href="https://firstgenn.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Link to pokemon first generation app.
          </a>
        </span>
      </section>
    </>
  );
}
