import { TagProps } from "../interfaces";
import styles from "./Tag.module.scss";

export default function Tag({ items }: TagProps) {
  return (
    <ul className={styles.tag}>
      {items.map((item, index) => (
        <li className={styles["tag__item"]} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
