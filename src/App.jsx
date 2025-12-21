import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Pricing from "./Pricing.jsx"
import ContactForm from "./ContactForm.jsx"
import Services from "./Services.jsx"
import Workflow from "./Workflow.jsx"
import {AboutMe, AboutMeShort} from "./AboutMe.jsx"
import Projects from "./Projects.jsx"

function App() {

  return (
    <div className="app">
      <Header/>
      <div className="content">
        <AboutMeShort/>
        <Projects/>
        <Workflow/>
        <Services/>
        <Pricing/>
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
3