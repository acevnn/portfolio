import styles from "./Loaders.module.scss";

function Loader() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.loader}></div>
    </section>
  );
}

export default Loader;
