import React from "react";
import profileImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-12 bg-gray-100 text-center min-h-screen flex flex-col items-center justify-center">
      <section id="about" className="w-full flex flex-col md:flex-row items-center py-20 bg-background">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-primary">Sobre Mim</h2>
          <p className="text-gray-600 mt-4">Trabalho com tecnologia, startups e criação de conteúdo.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={profileImage} className="w-40 h-40 rounded-full shadow-lg" alt="Foto de Perfil" />
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