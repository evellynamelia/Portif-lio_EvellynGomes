import { Navbar, Footer, ScrollTop } from "./layout";
import { Hero, Services, Projects, Process, Experiences, About } from "./sections";
import { useTheme } from "./hooks";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Experiences />
        <About />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
