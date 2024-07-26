import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
// import Data from './components/Data'
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Education from "./components/education/Education";
import Contact from "../src/components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header toggleTheme={toggleTheme} />
      <Home /> 
      <About />
      <Skills />
      <Project />
      <Education />
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
