import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import linkedinIcon from "../assets/linkedin.png";
import youtubeIcon from "../assets/youtube.png";

function Home() {
  const [text, setText] = useState('');
  const fullText = "Empreendedor, Desenvolvedor & Criador de Conteúdo";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Elemento com ID '${id}' não encontrado.`);
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center py-20">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Reduz opacidade */}
        <img src={profileImage} alt="Perfil" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-black bg-opacity-50 p-4 rounded-lg">{text}|</h1>
          <p className="mt-2 text-lg md:text-xl text-center text-white opacity-90 shadow-md">Ajudando startups a crescer e inovar com tecnologia.</p>
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-bold rounded-lg shadow-lg transition-transform duration-300"
          >
            Entre em Contato
          </button>
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/in/rogerio-fontes-de-resende/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/@Lanceiessa" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
            </a>
          </div>
          <div className="flex space-x-4 mt-6">
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
                Entre em contato
              </button>
            </Link>
            <a
              href="https://www.linkedin.com/in/rogerio-fontes-de-resende/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('contact')}
        className="fixed bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform duration-300"
      >
        Entre em Contato
      </button>
    </section>
  );
}

export default Home;