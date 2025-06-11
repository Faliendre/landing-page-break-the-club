import React from "react";
import "./HeroSection.css"; // Crearemos este archivo CSS

interface HeroSectionProps {
  logoSrc: string; // Para la URL del logo
}

const HeroSection: React.FC<HeroSectionProps> = ({ logoSrc }) => {
  return (
    <header className="hero-section">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={logoSrc} alt="Logo de BREAK" />
          </div>
          {/* Aquí podríamos agregar un menú de navegación si lo necesitamos más adelante */}
        </nav>

        <div className="hero-content">
          <h1>BREAK: Donde la Diversión Nunca Termina</h1>
          <p>Juegos, Bebidas y Amigos en un Ambiente Único y Diferente.</p>
          <a href="#que-ofrecemos" className="btn-primary">
            ¡Visítanos Hoy!
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
