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

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center py-20">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay escuro */}
        <img src={profileImage} alt="Perfil" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center">{text}|</h1>
          <p className="mt-2 text-lg md:text-xl text-center text-white opacity-90 shadow-md">Ajudando startups a crescer e inovar com tecnologia.</p>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-bold rounded-lg shadow-lg transition-transform duration-300">
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
        </div>
      </div>
      <button className="fixed bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform duration-300">
        Entre em Contato
      </button>
    </section>
  );
}

export default Home;