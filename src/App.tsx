import { useEffect, useState } from "react";
import { Navbar, Footer, ScrollTop } from "./layout";
import { Hero, Services, Projects, Process, Experiences, About } from "./sections";
import { DevNoticeModal } from "./DevNoticeModal";
import { useTheme } from "./hooks";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

type Route = "home" | "about" | "projects";

function getRoute(): Route {
  const hash = window.location.hash;

  if (hash === "#/sobre") {
    return "about";
  }

  if (hash === "#/projetos") {
    return "projects";
  }

  return "home";
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <DevNoticeModal />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {route === "home" && (
        <>
          <main>
            <Hero />
            <Services />
            <Projects />
            <Process />
            <Experiences />
            <About />
          </main>

          <Footer />
        </>
      )}

      {route === "about" && (
        <>
          <AboutPage />
          <Footer />
        </>
      )}

      {route === "projects" && (
        <>
          <ProjectsPage />
          <Footer />
        </>
      )}

      <ScrollTop />
    </>
  );
}