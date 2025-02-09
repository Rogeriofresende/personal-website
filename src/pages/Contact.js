import React from "react";

function Contact() {
  return (
    <section className="container mt-10 fade-in">
      <h2 className="text-4xl font-bold text-center">Entre em Contato</h2>
      <form className="mt-6 flex flex-col space-y-4 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <input type="text" placeholder="Digite seu nome completo" className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Seu melhor e-mail" className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea placeholder="Escreva sua mensagem aqui..." className="border p-3 rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md text-lg transition transform hover:scale-105">
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}

export default Contact;