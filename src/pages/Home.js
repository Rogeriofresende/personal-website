import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";

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
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay escuro */}
        <img src={profileImage} alt="Perfil" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center">{text}|</h1>
          <p className="mt-2 text-lg md:text-xl text-center opacity-80">Ajudando startups a crescer e inovar com tecnologia.</p>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-bold rounded-lg shadow-lg transition-transform duration-300">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;