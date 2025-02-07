import React from "react";

export function About() {
  return (
    <div className="p-12 bg-gray-100 text-center min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900">Sobre Mim</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl">
        Sou um empreendedor e mentor de startups, apaixonado por tecnologia e inovação.
        Meu foco é criar soluções escaláveis, ajudar empresas a estruturarem seus negócios
        e apoiar o ecossistema de inovação com conhecimento e experiência.
      </p>
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