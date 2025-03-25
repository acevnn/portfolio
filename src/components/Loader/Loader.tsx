import styles from "./Loaders.module.scss";

function Loader() {
  return (
    <section className={styles.wrapper}>
      <h1>In Progress</h1>
      <div className={styles.loader} />
    </section>
  );
}

export default Loader;
