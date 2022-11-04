import React from "react";
import "./Nosotros.css";

function Nosotros() {
  return (
    <div className="container">
      <div className="container d-flex  m-5">
        <div>
          <img
            className="rounded-circle"
            src="../../../img/pastel4.jpg"
            alt=""
          />
        </div>
        <div className="p-3">
          <h2 className="fs-1 text-center">Sobre Nosotros</h2>
          <p className="fs-4 ms-4">
            Nos enfocamos en la produccion de pasteleria para todo tipo de
            eventos y en proveer a diversos clientes la experiencia de sabor.
            Sorprenderlo cada vez que renueva su compromiso con{" "}
            <span className="fw-bold">Nuevos Rumbos Pasteleria</span>
          </p>
        </div>
      </div>

      <div className="section">
        <div className="descripcion--parte2 container">
          <div className="img-quienes-somos">
            <img src="../../../img/pastel1.jpg" alt=""></img>
          </div>
          <h2 className="titulo-parte2">Como Trabajamos</h2>
          <p>
            Todos los productos se hacen exclusivamente para tu evento, con un
            proceso de tres dias</p>
            <ul>
              <li>Horneado</li>
              <li>Relleno</li>
              <li>Decoracion</li>
            </ul>
            <p>Horneado: Saber hornear es tan importante como saber preparar una
            receta. De nada sirve una buena receta, un buen instructor o una
            buena guía si no se hornea adecuadamente. Relleno: Los rellenos son
            a eleccion del cliente en una amplia variedad que tenemos, y al
            momento de elegir siempre se complica. Desde Nuevos Rumbos podemos
            guiarte a seleccionar el tuyo, entre ellos podemos ofrecerte dulce
            de leche solo o con chips de (chocolate, merenguitos, bon o bon,
            rocklets, mantecol, chocolate, nuez, oreos), ademas ganache
            chocolate + crema, semi amargo, con leche, blanco. Y en la viariedad
            de crema, crema oreo, bon o bon, tramontana, bariloche, bananita,
            marroc, frutilla. La decoracion: Al hablar de decoracion para tu
            pastel, la imaginacion sobrepasa todos los limites. En esta ocasion
            podemos ayudarte, con la imaginacion segun la tematica seleccionada.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
