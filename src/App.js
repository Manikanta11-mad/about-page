import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Labs from "./components/Labs";
import Framework from "./components/Framework";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/about"
          element={
            <>
              <Hero />
              <Stats />
              <Labs />
              <Framework />
              <Team />
              <Pricing />
              <Footer />
            </>
          }
        />

        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
