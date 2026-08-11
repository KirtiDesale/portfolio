import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Achievements from "./components/achievements/Achievements";
import Contact from "./components/contact/Contact";

import TechStack from "./components/techstack/Techstack";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;