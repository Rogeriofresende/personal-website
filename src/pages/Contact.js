import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="container mt-10">
      <h2 className="text-4xl font-bold text-center">Entre em Contato</h2>
      <motion.form 
        className="mt-6 flex flex-col space-y-4 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input type="text" placeholder="Seu Nome" className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition" required />
        <input type="email" placeholder="Seu Email" className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition" required />
        <textarea placeholder="Sua Mensagem" className="border p-3 rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" required></textarea>
        <motion.button 
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md text-lg transition transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {submitted ? "Enviado ✅" : "Enviar Mensagem"}
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;