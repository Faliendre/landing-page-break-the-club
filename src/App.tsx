import "./index.css";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  const breakLogoUrl = "/images/logo2.jpg"; // O tu logo renombrado

  // Datos del local (extraídos de la herramienta maps_local)
  const direccion =
    "Calle La Paz entre plaza Quintanilla y Crisostomo Carrillo, Cochabamba, Bolivia";
  const horarios = [
    "miércoles: 15:00-23:00",
    "jueves: 115:00-23:00",
    "viernes: 15:00-23:00",
    "sábado: 15:00-23:00",
    "domingo: 15:00-23:00",
  ];
  const mapaUrl = "https://maps.app.goo.gl/Nvkmc2wXeC9fdan8A"; // URL del mapa

  return (
    <div className="App">
      <HeroSection logoSrc={breakLogoUrl} />
      <FeaturesSection />
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Dirección</h3>
              <p>{direccion}</p>
              {/* Mapa embebido */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.4512085495027!2d-66.15246252739621!3d-17.38245330903836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3750060da50df%3A0x78bfc3802d95618b!2sBillar%20Break!5e0!3m2!1ses!2sbo!4v1749671235319!5m2!1ses!2sbo"
                  width="600"
                  height="450"
                  //style="border:0;"
                  //allowfullscreen=""
                  loading="lazy"
                  //referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a href={mapaUrl} target="_blank" rel="noopener noreferrer">
                Ver en Google Maps
              </a>
            </div>
            <div className="footer-section">
              <h3>Horarios de Atención</h3>
              <ul>
                {horarios.map((dia, index) => (
                  <li key={index}>{dia}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>© 2025 BREAK. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
