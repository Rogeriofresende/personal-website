import React from "react";

const projects = [
  { title: "Startup X", description: "Uma solução inovadora para empreendedores." },
  { title: "Tech Hub", description: "Plataforma para networking entre startups." },
  { title: "Mentoria 360", description: "Ajudando novos empreendedores a crescerem." },
];

function Works() {
  return (
    <section id="works" className="py-20">
      <h2 className="text-4xl font-bold text-primary text-center">Projetos</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold text-secondary">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;