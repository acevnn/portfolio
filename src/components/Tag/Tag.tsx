import { TagProps } from "../interfaces";
import styles from "./Tag.module.scss";

export default function Tag({ items }: TagProps) {
  // console.log("props", props);
  console.log("items", items);
  return (
    <ul className={styles.tag}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
