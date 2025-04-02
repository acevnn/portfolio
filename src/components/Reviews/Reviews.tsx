import styles from "./Reviews.module.scss";
import { REVIEWS } from "@/constants";

export default function Reviews() {
  return (
    <>
      <h2 className={styles["heading-reviews"]} id="reviews" data-id="reviews">
        Performance Reviews
      </h2>
      <section className={styles.reviews}>
        <ul className={styles["reviews__wrapper"]}>
          {REVIEWS.map((review) => {
            return (
              <li key={review.id} className={styles["reviews__list-item"]}>
                <h3>{review.name}</h3>
                <p>{review.paragraph}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
