import React from "react";

function Contact() {
  return (
    <div className="p-12 text-center flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold text-gray-900">Contato</h1>
      <form className="mt-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col">
        <label className="block">Nome</label>
        <input
          type="text"
          className="w-full p-2 mb-4 bg-gray-700 border border-gray-600"
        />
        <label className="block">Email</label>
        <input
          type="email"
          className="w-full p-2 mb-4 bg-gray-700 border border-gray-600"
        />
        <label className="block">Mensagem</label>
        <textarea
          className="w-full p-2 mb-4 bg-gray-700 border border-gray-600"
        ></textarea>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;