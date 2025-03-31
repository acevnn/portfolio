import styles from "./Reviews.module.scss";
import REVIEWS from "@/constants/reviews";

type ReviewsProps = {
  name: string;
  paragraph: string;
};

export default function Reviews() {
  // console.log(REVIEWS);

  REVIEWS.map((review) => {
    console.log("inside of the map: ", review.name);
  });

  return (
    <>
      <h2 className={styles["heading-reviews"]} id="reviews" data-id="reviews">
        Performance Reviews
      </h2>
      <section className={styles.reviews}>
        <ul className={styles["reviews__wrapper"]}>
          {REVIEWS.map((review) => {
            return (
              <li key={Math.random()} className={styles["reviews__list-item"]}>
                <span>{review.name}</span>
                <p>{review.paragraph}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
