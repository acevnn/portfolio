import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
import styles from "./Layout.module.scss";
import MouseLight from "@/components/MouseLight/MouseLight";

export default function Layout() {
  return (
    <>
      <MouseLight />
      <Header />
      <main className={styles["main-wrapper"]}>
        <Outlet />
        <About />
        <Experience />
        <Projects />
        <Reviews />
      </main>
    </>
  );
}
