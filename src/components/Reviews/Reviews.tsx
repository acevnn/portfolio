import { AnchorProps } from "../interfaces.ts";

export default function Reviews({ reviews }: AnchorProps) {
  return (
    <ul id={reviews}>
      <h2>Performance Reviews</h2>
      <li>
        <h4>Dimitar Hristoskov</h4>
        <p>
          Structured way of working - Pragmatic approach to resolve issues
          quickly - Clear and timely communication within the team - Always up
          for any challenge. "Be confident, you have brilliant ideas so you
          could just take the risk and implement those ideas."
        </p>
      </li>
      <li>
        <h4>Steven Buxton</h4>
        <p>
          Highly motivated, nice personality, always tries to do his best, very
          invested in the success of the project!
        </p>
      </li>
      <li>
        <h4>Orest</h4>
        <p>
          Nino is a highly experienced frontend developer, known for being a
          reliable team player with strong skills in analyzing and breaking down
          tasks for accurate estimations and incremental development. Nice
          person to work with.
        </p>
      </li>
      <li>
        <h4>Rumyana Stambolova</h4>
        <p>
          Working on the project as a team with Nino was very seamless for me in
          communicating and solving day to day tasks. Nino is responsive and
          always strives to do the best in his work, to help and understand
          other perspectives. I recommend him for future collaboration.
        </p>
        <h5>Areas for improvement</h5>
        <p>
          To be self-corrective, since he has the necessary expertise to deliver
          best in class solutions in work.
        </p>
      </li>
    </ul>
  );
}
