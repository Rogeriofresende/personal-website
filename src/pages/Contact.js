import React from "react";

export function Contact() {
  return (
    <div className="p-12 text-center flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold text-gray-900">Contato</h1>
      <form className="mt-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col">
        <input
          type="text"
          placeholder="Seu nome"
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Seu email"
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <textarea
          placeholder="Sua mensagem"
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          rows="4"
        ></textarea>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Enviar
        </button>
      </form>
    </div>
  );
}