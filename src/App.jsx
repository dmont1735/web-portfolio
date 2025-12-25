import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Pricing from "./Pricing.jsx";
import ContactForm from "./ContactForm.jsx";
import Services from "./Services.jsx";
import Workflow from "./Workflow.jsx";
import {AboutMe, AboutMeShort} from "./AboutMe.jsx";
import Projects from "./Projects.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <Header isDarkMode={darkMode} onDarkMode={()=>setDarkMode(!darkMode)}/>
      <div className="content">
        <AboutMeShort/>
        <Projects/>
        <Workflow/>
        <Services/>
        <Pricing/>
      </div>
      <ContactForm/>
      <Footer isDarkMode={darkMode}/>
    </div>
  )
}

export default App
3