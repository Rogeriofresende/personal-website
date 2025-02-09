import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 left-0 w-full px-6 py-4 transition-all duration-300 ${
      scrolling ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
    }`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Rogerio Fontes</h1>

        {/* Menu Responsivo */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 dark:text-white">Home</Link>
          <Link to="/about" className="hover:text-blue-600 dark:text-white">Sobre</Link>
          <Link to="/works" className="hover:text-blue-600 dark:text-white">Projetos</Link>
          <Link to="/contact" className="hover:text-blue-600 dark:text-white">Contato</Link>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full shadow-md"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-gray-900 shadow-md p-4 rounded-md flex flex-col space-y-2 md:hidden">
          <Link to="/" className="hover:text-blue-600 dark:text-white">Home</Link>
          <Link to="/about" className="hover:text-blue-600 dark:text-white">Sobre</Link>
          <Link to="/works" className="hover:text-blue-600 dark:text-white">Projetos</Link>
          <Link to="/contact" className="hover:text-blue-600 dark:text-white">Contato</Link>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full shadow-md"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}

function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <p>© 2025 Rogerio Fontes. Todos os direitos reservados.</p>
      <div className="flex justify-center space-x-4 mt-3">
        <a href="https://linkedin.com/in/rogeriofontes" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://youtube.com/@Lanceiessa" target="_blank" rel="noopener noreferrer">
          <img src="/assets/youtube.svg" alt="YouTube" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="animated-background min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<FadeIn><Home /></FadeIn>} />
          <Route path="/about" element={<FadeIn><About /></FadeIn>} />
          <Route path="/works" element={<FadeIn><Works /></FadeIn>} />
          <Route path="/contact" element={<FadeIn><Contact /></FadeIn>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}