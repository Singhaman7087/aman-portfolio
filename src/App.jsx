import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio light"}>
      <Navbar />

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Change theme"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;