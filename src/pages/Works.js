import React from "react";
import { motion } from "framer-motion";

export function Works() {
  return (
    <div className="relative overflow-hidden bg-background text-white text-center py-24">
      {/* Fundo Parallax */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/bg-pattern.png')" }}></div>

      {/* Conteúdo */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-5xl font-extrabold tracking-wide">Meus Trabalhos</h1>
        <p className="text-lg text-gray-400 mt-4">Projetos e iniciativas que fazem a diferença</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-8">
          <motion.div 
            whileHover={{ rotateY: 10, scale: 1.05 }} 
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all duration-300 text-white"
          >
            <h2 className="text-xl font-bold">Lancei Essa Podcast</h2>
            <p className="text-gray-400 mt-2">Canal do ecossistema de startups de Brasília.</p>
            <a href="https://www.youtube.com/@Lanceiessa" className="text-secondary hover:underline mt-2 inline-block">
              Ver no YouTube
            </a>
          </motion.div>
          <motion.div 
            whileHover={{ rotateY: 10, scale: 1.05 }} 
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all duration-300 text-white"
          >
            <h2 className="text-xl font-bold">Mentoria para Startups</h2>
            <p className="text-gray-400 mt-2">Apoio para times de alta performance e aceleração de negócios.</p>
            <a href="https://www.linkedin.com/in/rogerio-fontes-de-resende/" className="text-secondary hover:underline mt-2 inline-block">
              Saiba Mais
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}