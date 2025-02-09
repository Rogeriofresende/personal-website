import React from "react";
import minhaFoto from "../assets/profile.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-12 bg-gray-100 text-center min-h-screen flex flex-col items-center justify-center">
      <section className="flex flex-col md:flex-row items-center gap-8 mt-16 px-6">
        <img src={minhaFoto} alt="Minha Foto" className="w-64 h-64 rounded-full shadow-lg transition transform hover:scale-105" />
        <div>
          <h2 className="text-4xl font-bold">Sobre Mim</h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Sou um entusiasta da tecnologia e do empreendedorismo. Trabalho com desenvolvimento web e adoro criar soluções inovadoras.
          </p>
          <Link to="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md text-lg transition transform hover:scale-105">
            Entre em Contato
          </Link>
        </div>
      </section>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6">Principais Competências</h2>
      <ul className="text-lg text-gray-700 mt-4">
        <li>✅ Desenvolvimento de Startups</li>
        <li>✅ Criação de Funil de Vendas</li>
        <li>✅ Mentoria de Empreendedores</li>
        <li>✅ Estratégias de Crescimento</li>
        <li>✅ Análise de Dados para Negócios</li>
      </ul>
    </div>
  );
}

export default About;