import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <>
      <Header />

      <main className={styles["main-wrapper"]}>
        <Outlet />
        <About about="about" />
        <Experience experience="experience" />
        <Projects projects="projects" />
        <Reviews reviews="reviews" />
      </main>
      {/*<Loader />*/}
    </>
  );
}
