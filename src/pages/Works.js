import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Startup X", description: "Plataforma SaaS para gestão empresarial.", image: "/assets/startup.jpg", link: "#" },
  { title: "Podcast", description: "Meu podcast sobre startups e inovação.", image: "/assets/podcast.jpg", link: "#" },
  { title: "Fut XP", description: "Jogo de futebol RPG que mistura estratégia e ação.", image: "/assets/futxp.jpg", link: "#" }
];

function Works() {
  return (
    <section className="container mt-10 fade-in">
      <h2 className="text-4xl font-bold text-center">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <motion.div key={index}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transform transition hover:scale-105"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a href={project.link} className="mt-3 inline-block text-blue-600 underline">
              Ver mais →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Works;