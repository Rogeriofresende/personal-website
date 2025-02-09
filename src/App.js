import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">Rogério Fontes</h1>
        <div className="flex space-x-8 text-lg">
          <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition duration-300">Sobre</Link>
          <Link to="/works" className="hover:text-gray-400 transition duration-300">Projetos</Link>
          <Link to="/contact" className="hover:text-gray-400 transition duration-300">Contato</Link>
        </div>
      </nav>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Rogério Fontes. Todos os direitos reservados.</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/rogerio-fontes-de-resende/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          <a href="https://www.youtube.com/@Lanceiessa" target="_blank" rel="noopener noreferrer">📹 YouTube</a>
        </div>
      </footer>
    </Router>
  );
}