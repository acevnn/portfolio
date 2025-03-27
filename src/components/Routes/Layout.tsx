import { Outlet } from "react-router-dom";

import Header from "../Header/Header.tsx";
import About from "../About/About.tsx";
import Experience from "../Experience/Experience.tsx";
import Projects from "../Projects/Projects.tsx";
import Reviews from "../Reviews/Reviews.tsx";
import Loader from "../Loader/Loader.tsx";

export default function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
        <About about="about" />
        <Experience experience="experience" />
        <Projects projects="projects" />
        <Reviews reviews="reviews" />
      </main>
      <Loader />
    </>
  );
}
