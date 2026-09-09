import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio light"}>
      <Navbar />

      {/* Theme Button */}
      <button
        className="theme-btn"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle theme"
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <main>
        <Hero />
        <About />
        <Skills />
        <Languages />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;