import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <nav className="fixed top-0 w-full bg-black bg-opacity-50 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold ml-4">Rogerio Fontes</h1>
        <ul className="flex space-x-4 mr-4">
          <li className="hover:text-gray-400"><Link to="/">Home</Link></li>
          <li className="hover:text-gray-400"><Link to="/about">Sobre</Link></li>
          <li className="hover:text-gray-400"><Link to="/works">Projetos</Link></li>
          <li className="hover:text-gray-400"><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
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