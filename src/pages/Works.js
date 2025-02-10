import React from "react";
import { motion } from "framer-motion";

const projects = [
  { year: "2024", title: "Podcast Lancei Essa", description: "Sou sócio e host deste podcast sobre startups." },
  { year: "2023", title: "Consultoria Tech", description: "Ajudei startups a escalarem seus produtos." },
  { year: "2022", title: "Desenvolvimento de Produto", description: "Construí soluções para o setor financeiro." },
  { year: "2020", title: "Primeira Startup", description: "Co-fundei minha primeira empresa de tecnologia." },
];

const Works = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Minha Trajetória</h2>

      {/* Seção do Podcast */}
      <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold">🎙 Podcast Lancei Essa</h3>
        <p className="text-gray-700">O podcast sobre startups que sou host e sócio.</p>
        <a href="https://www.youtube.com/@Lanceiessa" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">
            Escute agora
          </button>
        </a>
      </div>

      {/* Linha do Tempo */}
      <motion.div 
        className="flex overflow-x-auto space-x-6 mt-6 p-4"
        whileTap={{ cursor: "grabbing" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{project.year}</h3>
            <p className="text-gray-700">{project.title}</p>
            <p className="text-gray-500">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Works;