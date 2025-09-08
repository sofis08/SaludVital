import React from "react";
import "../css/logo.css";
import "../css/urgencias.css";
import { Link } from "react-router-dom";

function Urgencias() {
  return (
    <div className="urgencias-container">
      <Link to="/" className="logo-link">
        <span className="logo"></span>
        SaludVital
      </Link>

      <nav className="search-navbar">
        <form className="search-form" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn-search" type="submit">
            Search
          </button>
        </form>
      </nav>

      <h1 className="first-container">Urgencias</h1>

      <div className="cuadro-right">
        <h2>Síntomas de alerta</h2>
        <p>
          Aquí encontrarás algunos de los varios síntomas de alerta que deberás
          tener en cuenta para saber si sucede alguna situación de urgencia.
        </p>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col col11">
            <strong>Sangrado:</strong>
            <ul>
              <li>Vómito con sangre o sangre en las heces.</li>
              <li>Hemorragias vaginales inusuales (especialmente durante el embarazo).</li>
              <li>Sangrado persistente de cualquier origen.</li>
            </ul>
          </div>

          <div className="col col22">
            <strong>Reacciones alérgicas:</strong>
            <ul>
              <li>Hinchazón de la lengua, labios o garganta.</li>
              <li>Dificultad para respirar o tragar.</li>
              <li>Urticaria generalizada con otros síntomas graves.</li>
            </ul>
          </div>

          <div className="col col33">
            <strong>Problemas respiratorios:</strong>
            <ul>
              <li>Dificultad para respirar o sensación de falta de aire.</li>
              <li>Silbidos al respirar (sibilancias) o respiración rápida y superficial.</li>
              <li>Dolor en el pecho al inhalar o exhalar.</li>
            </ul>
          </div>

          <div className="col col44">
            <strong>Alteraciones neurológicas:</strong>
            <ul>
              <li>Pérdida repentina de conciencia o desmayo.</li>
              <li>Debilidad repentina o parálisis en la cara, brazos o piernas, especialmente en un lado del cuerpo.</li>
              <li>Dificultad para hablar, entender, o confusión mental.</li>
              <li>Convulsiones.</li>
            </ul>
          </div>

          <div className="text-peligro-container">
            <h2></h2>
            <p>
              <strong>
                Si tienes alguno de estos síntomas, comunícate de inmediato con las
                siguientes líneas de ayuda y apoyo:
              </strong>
            </p>
          </div>

          <div className="text-three-container">
            <h2></h2>
            <ul>
              <li><strong>132:</strong> Cruz Roja</li>
              <li><strong>119:</strong> Bomberos</li>
              <li><strong>125:</strong> Secretaría de Salud – Ambulancias</li>
              <li><strong>123:</strong> Número Único Nacional de Emergencias</li>
            </ul>
          </div>
        </div>
      </div>

      {}
      <img
        src={require("../assets/img/doña.png")}
        alt=""
        className="bottom-right-image"
      />
    </div>
  );
}

export default Urgencias;




