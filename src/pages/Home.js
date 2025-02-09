import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
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
    <Parallax bgImage={profileImage} strength={500}>
      <div className="h-screen flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold">{text}|</h1>
        <p className="text-lg mt-4 max-w-2xl">Ajudando startups a crescer e inovar com tecnologia.</p>
        <a href="#contact" className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
          Entre em Contato
        </a>
      </div>
    </Parallax>
  );
}

export default Home;