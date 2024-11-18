import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";

import style from "./App.module.css";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <>
      <div className={style.App}>
        <Navbar />
        <Main />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
