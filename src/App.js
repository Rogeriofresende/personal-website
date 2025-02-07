import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Works } from "./pages/Works";
import { Contact } from "./pages/Contact";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from "react-icons/ai";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-black bg-opacity-90 backdrop-blur-md p-5 text-white flex justify-between items-center fixed top-0 left-0 w-full z-20 shadow-lg">
        <div className="text-2xl font-bold tracking-wide">Rogério Fontes</div>
        <div className="flex space-x-8 text-lg">
          <Link to="/#about" className="hover:text-gray-400 transition duration-300">Sobre</Link>
          <Link to="/#works" className="hover:text-gray-400 transition duration-300">Trabalhos</Link>
          <Link to="/#contact" className="hover:text-gray-400 transition duration-300">Contato</Link>
        </div>
        <div>
          <Link to="/contact">
            <button className="bg-secondary text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition-all">
              Contato
            </button>
          </Link>
        </div>
      </nav>

      {/* Conteúdo */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Rodapé */}
      <footer className="bg-black text-white text-center p-6 mt-8">
        <p>&copy; 2025 Rogério Fontes. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/rogerio-fontes-de-resende/" className="hover:text-gray-400">LinkedIn</a>
          <a href="https://www.youtube.com/@Lanceiessa" className="hover:text-gray-400">YouTube</a>
          <a href="/contact" className="hover:text-gray-400">Contato</a>
        </div>
      </footer>
    </Router>
  );
}