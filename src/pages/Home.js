import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import minhaFoto from "../assets/profile.jpg";

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
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 min-h-screen text-center md:text-left px-6 fade-in">
      <div>
        <h1 className="text-5xl font-bold">{text}|</h1>
        <p className="text-gray-500 mt-4 text-lg">Ajudando startups a crescer e inovar com tecnologia.</p>
        <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md text-lg transition transform hover:scale-105">
          Entre em Contato
        </a>
      </div>
      <img src={minhaFoto} alt="Minha Foto" className="w-64 h-64 rounded-full shadow-lg transition transform hover-scale" />
    </section>
  );
}

export default Home;