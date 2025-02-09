import React from "react";
import { motion } from "framer-motion";

function Works() {
  const projects = [
    { title: "Lancei Essa Podcast", link: "https://www.youtube.com/@Lanceiessa" },
    { title: "Mentoria para Startups", link: "https://www.linkedin.com/in/rogerio-fontes-de-resende/" }
  ];

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
        <h1 className="text-5xl font-extrabold tracking-wide">Projetos em Destaque</h1>
        <p className="text-lg text-gray-400 mt-4">Veja alguns dos meus trabalhos.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-8">
          {projects.map((project, index) => (
            <motion.div key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-white text-left"
            >
              <h2 className="text-xl font-bold">{project.title}</h2>
              <a href={project.link} className="text-blue-400 hover:underline mt-2 inline-block">
                Saiba mais →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Works;