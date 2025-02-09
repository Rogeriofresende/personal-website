import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 ${
        scrolling ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-xl font-bold text-primary">
          Rogerio Resende
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary">
              Sobre
            </a>
          </li>
          <li>
            <a href="#works" className="hover:text-primary">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
