import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-black via-primary to-secondary text-white px-10 lg:px-20"
    >
      <div className="container">
        {/* Texto Principal */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <h1 className="text-6xl font-extrabold text-gradient fade-in">
            Olá, sou <span className="text-secondary">Rogério Fontes</span>!
          </h1>
          <p className="text-xl text-gray-300 mt-6 leading-relaxed fade-in">
            Empreendedor, mentor de startups, apresentador e apaixonado por inovação e tecnologia.
          </p>
          <div className="mt-8">
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="button"
              >
                Me Conheça Melhor
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Imagem de Destaque */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 lg:mt-0 lg:ml-16"
        >
          <img src="/images/profile.png" alt="Rogério Fontes" className="w-96 h-96 object-cover rounded-full shadow-lg border-4 border-secondary" />
        </motion.div>
      </div>
    </motion.div>
  );
}