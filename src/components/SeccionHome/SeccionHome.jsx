import React from "react";
import "./SeccionHome.css";
import { Link } from "react-router-dom";

function SeccionHome() {
  return (
    <div>
      <div id="presentacion" className="section">
        <div className="contain">
          <div className="img-container" data-aos="flip-left"></div>
          <div className="texto">
            <h1>
              Nuevos Rumbos <span className="pastel">Pasteleria</span>
            </h1>
            <p>
              Somos una empresa familiar dedicada a la pasteleria con mas de 10
              años de experiencia. Nos destacamos por el amor dedicado a nuestro
              trabajo con el objetivo de crear momentos especiales para nuestros
              clientes. Los invito a acompañarnos a descubrir las dulzuras para
              compartir.
            </p>
          </div>
        </div>
      </div>
      <main id="nuestros-servicios" className="main">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <div className="servicios">
            <div className="carta1">
              <h3>Pasteleria Artesanal</h3>
              <p>
                Pasteleria elaborada y producida por pasteleros profesionales.
                En la <span className="fw-bold">reposteria artesanal</span>{" "}
                todos los productos se elaboran a mano y normalmente bajo los
                seguimientos de las recetas mas tradicionales con ingredientes
                frescos y naturales.
              </p>
              <Link className="nav-link" to="Nosotros">
                <button className="info-button">+ Info</button>
              </Link>
            </div>

            <div className="carta2">
              <h3>Pasteleria Eventos</h3>
              <p>
                {" "}
                Elaboramos un monton de opciones de tortas, tartas, minitortas,
                vasitos y macarons para armar la mesa dulce mas increible. Asi
                que sin importar lo pequeño o grande que sea tu evento, seguro
                podemos armar una seleccion acorde a cada ocasion.
              </p>

              <Link className="nav-link" to="Nosotros">
                <button className="info-button">+ Info</button>
              </Link>
            </div>

            <div className="carta3">
              <h3>Pasteleria Diseños</h3>
              <p>
                En <span className="fw-bold">Pastelería de diseño</span>{" "}
                ofrecemos tortas de vanguardia, decoradas con las últimas
                tendencias para reflejar la elegancia y sofisticación de su
                próximo evento. Como asi tambien personalizadas y exclusivas al
                estilo del cliente
              </p>
              <Link className="nav-link" to="Nosotros">
                <button className="info-button">+ Info</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SeccionHome;
