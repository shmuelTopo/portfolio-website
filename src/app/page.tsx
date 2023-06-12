import "./page.css";
import "../components/Navbar";
import Navbar from "../components/Navbar";
import Home from "../views/Home";
import About from "../views/About";
import View from "../views/View";
import SocialMediaLinks from "../views/Contact";
import Projects from "../views/Projects";

const links = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "contact" },
];

function App() {

  return (
    <main className={"App"}>
      <Navbar
        links={links}
      />
      <View id="home">
        <Home />
      </View>

      <View id="about">
        <About />
      </View>

      <View id="projects">
        <Projects />
      </View>

      <View id="contact">
        <SocialMediaLinks />
      </View>
    </main>
  );
}

export default App;
