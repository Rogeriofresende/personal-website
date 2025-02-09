import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full px-6 py-4 transition-all duration-300 ${
      scrolling ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Rogerio Fontes</h1>

        {/* Menu Responsivo */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">Sobre</Link>
          <Link to="/works" className="hover:text-blue-600">Projetos</Link>
          <Link to="/contact" className="hover:text-blue-600">Contato</Link>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-md p-4 rounded-md flex flex-col space-y-2 md:hidden">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">Sobre</Link>
          <Link to="/works" className="hover:text-blue-600">Projetos</Link>
          <Link to="/contact" className="hover:text-blue-600">Contato</Link>
        </div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className="bg-black text-gray-400 py-6 text-center">
        <p className="text-sm">&copy; 2025 Rogério Fontes - Todos os direitos reservados.</p>
        <div className="mt-2 space-x-4">
          <a href="https://www.linkedin.com/in/rogerio-fontes-de-resende/" target="_blank" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://www.youtube.com/@Lanceiessa" target="_blank" className="hover:text-white">
            YouTube
          </a>
        </div>
      </footer>
    </Router>
  );
}