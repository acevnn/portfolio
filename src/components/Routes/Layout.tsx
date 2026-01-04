import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "../Header/Header";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
import styles from "./Layout.module.scss";
import MouseLight from "@/components/MouseLight/MouseLight";
import Preloader from "../Preloader/Preloader";
import { observeReveal } from "@/hooks";
import CoreSkills from "@/components/CoreSkills/CoreSkills";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const id = setTimeout(() => observeReveal(), 50);
      return () => clearTimeout(id);
    }
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <MouseLight />
          <Header />
          <main className={styles["main-wrapper"]}>
            <Outlet />
            <About />
            <CoreSkills />
            <Experience />
            <Projects />
            <Reviews />
          </main>
        </>
      )}
    </>
  );
}
