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
    <motion.div 
      className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center background-image"
      style={{ backgroundImage: `url(${profileImage})` }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/50"></div>  {/* Camada escura */}
      <div className="relative text-center">
        <h1 className="text-5xl font-bold drop-shadow-lg">{text}|</h1>
        <p className="text-lg mt-4 max-w-2xl">Ajudando startups a crescer e inovar com tecnologia.</p>
        <a href="#contact" className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
          Entre em Contato
        </a>
        <img 
          src={profileImage} 
          alt="Foto de Rogério Fontes"
          className="rounded-full w-40 h-40 object-cover shadow-lg mx-auto mt-6"
        />
      </div>
    </motion.div>
  );
}

export default Home;