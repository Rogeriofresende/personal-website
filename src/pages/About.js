import React from "react";
import profileImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-12 bg-gray-100 text-center min-h-screen flex flex-col items-center justify-center">
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <img src={profileImage} alt="Rogério Resende" className="w-1/3 rounded-lg shadow-lg" />
          <div className="w-2/3">
            <h2 className="text-4xl font-bold text-primary">Sobre Mim</h2>
            <p className="text-lg mt-4 text-secondary">
              Sou um profissional apaixonado por tecnologia, startups e inovação. Minha missão é ajudar empreendedores
              e criadores a alcançar seu potencial máximo.
            </p>
          </div>
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