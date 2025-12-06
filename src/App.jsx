import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import BackgroundStars from "./components/Background3D/BackgroundStars";
import SoundToggle from "./components/Shared/SoundToggle";

function App() {
  return (
    <>
      <BackgroundStars />
      <SoundToggle />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
