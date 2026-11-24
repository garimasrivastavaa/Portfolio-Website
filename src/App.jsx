import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import { site } from "./data";

export default function App() {
  return (
    <>
      <div className="bg-grid" />
      <div className="glow g1" />
      <div className="glow g2" />
      <div className="glow g3" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>
      <footer className="footer mono">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </>
  );
}