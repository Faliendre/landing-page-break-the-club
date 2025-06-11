import React from "react";
import "./FeaturesSection.css"; // Crearemos este archivo CSS

interface FeatureItemProps {
  iconOrImage: string;
  title: string;
  description: string;
  isImage?: boolean;
  objectPosition?: string; // <-- AÑADIMOS ESTA LÍNEA
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  iconOrImage,
  title,
  description,
  isImage = false,
  objectPosition = "center",
}) => {
  // <-- Añadimos objectPosition con valor por defecto
  return (
    <div className="feature-item">
      {isImage ? (
        // Aplicamos el estilo directamente al img
        <img
          src={iconOrImage}
          alt={title}
          className="feature-image"
          style={{ objectPosition: objectPosition }} // <-- APLICAMOS EL ESTILO AQUÍ
        />
      ) : (
        <img src={iconOrImage} alt={title} className="feature-icon" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  // Aquí vamos a definir las características con las imágenes que tienes
  const features = [
    {
      iconOrImage: "/images/playstation.png", // Imagen de la PlayStation
      title: "Consolas de Última Generación",
      description:
        "Sumérgete en la acción con nuestras PlayStation 5, PlayStation 4 y Nintendo Switch. Accede a los últimos lanzamientos y tus clásicos favoritos. ¡Conéctate con amigos en partidas épicas!",
      isImage: true,
      objectPosition: "top",
    },
    {
      iconOrImage: "/images/poker.png", // Imagen de la mesa de poker/cartas
      title: "Zona de Juegos de Mesa y Cartas",
      description:
        "¿Prefieres la estrategia? Nuestras mesas de juegos de mesa y cartas son el lugar perfecto para retar a tus amigos o conocer gente nueva.",
      isImage: true,
    },
    {
      iconOrImage: "/images/mesa3.png", // O mesa1.jpg, mesa2.jpg, mesa4.jpg
      title: "Mesas de Billar Profesionales",
      description:
        "Demuestra tus habilidades en nuestras 4 mesas de billar. ¡Ideal para un desafío amistoso o para perfeccionar tu puntería!",
      isImage: true,
    },
    {
      iconOrImage: "/images/bartendeer.png", // Imagen del bartender
      title: "Bar Completo y Amplia Variedad de Bebidas",
      description:
        "Relájate y disfruta de tu bebida favorita en nuestro bar. Desde refrescantes cócteles y cervezas heladas hasta opciones sin alcohol, tenemos algo para todos los gustos.",
      isImage: true,
    },
    {
      iconOrImage: "/images/nuevo2.png", // Imagen de gente viendo el partido
      title: "¡Vive el Deporte en Pantalla Grande!",
      description:
        "No te pierdas ningún partido importante. Con nuestra TV de alta definición, el ambiente de la cancha se traslada a Break. ¡La mejor experiencia para los aficionados!",
      isImage: true,
    },
    // Podríamos añadir una sobre el ambiente si tienes una buena imagen general
    {
      iconOrImage: "/images/mesa1.png", // O una imagen que muestre el amplio espacio si hay una mejor
      title: "Ambiente Espacioso y Confortable",
      description:
        "Un lugar amplio y diseñado para tu comodidad, perfecto para pasar el rato, celebrar con amigos o simplemente relajarte con estilo.",
      isImage: true,
      objectPosition: "top",
    },
  ];

  return (
    <section id="que-ofrecemos" className="features-section">
      <div className="container">
        <h2>¿Listo para el Mejor Break de tu Día?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              iconOrImage={feature.iconOrImage}
              title={feature.title}
              description={feature.description}
              isImage={feature.isImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
