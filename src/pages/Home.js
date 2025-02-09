import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import minhaFoto from "../assets/profile.jpg";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white px-6">
      {/* Seção Principal */}
      <motion.h1 className="text-6xl font-bold text-gradient mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Olá, sou Rogério Fontes!
      </motion.h1>
      
      <p className="text-xl text-gray-400 mt-4">
        Conectando pessoas, tecnologia e empreendedorismo.
      </p>

      <img src={minhaFoto} 
        alt="Minha Foto" 
        className="rounded-full w-48 h-48 mt-6 shadow-lg" />
      
      <div className="mt-6 space-x-4">
        <Link to="/about" className="px-6 py-3 bg-primary text-white rounded-full font-semibold shadow-md hover:bg-secondary transition-all">
          Saiba Mais
        </Link>
        <Link to="/contact" className="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all">
          Entre em Contato
        </Link>
      </div>
    </div>
  );
}

export default Home;