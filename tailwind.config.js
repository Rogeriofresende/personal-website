module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Azul moderno
        secondary: "#1E293B", // Cinza escuro
        accent: "#FACC15", // Amarelo destaque
        background: "#F8FAFC", // Fundo claro
        textLight: "var(--text-light)",
      },
    },
  },
  plugins: [],
};