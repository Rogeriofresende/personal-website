import React from "react";
import { motion } from "framer-motion";

function Works() {
  const projects = [
    { title: "Lancei Essa Podcast", link: "https://www.youtube.com/@Lanceiessa" },
    { title: "Mentoria para Startups", link: "https://www.linkedin.com/in/rogerio-fontes-de-resende/" }
  ];

  return (
    <div className="py-16 bg-gray-900 text-white text-center">
      <h1 className="text-5xl font-extrabold tracking-wide">Projetos em Destaque</h1>
      <p className="text-lg text-gray-400 mt-4">Veja alguns dos meus trabalhos.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-8">
        {projects.map((project, index) => (
          <motion.div key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-white text-left flex flex-col justify-between"
          >
            <h2 className="text-xl font-bold">{project.title}</h2>
            <a href={project.link} className="text-blue-400 hover:underline mt-2 inline-block">
              Saiba mais →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Works;