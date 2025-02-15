import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
          <img src={process.env.PUBLIC_URL + "/assets/linkedin.svg"} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://youtube.com/@Lanceiessa" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/assets/youtube.svg"} alt="YouTube" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}