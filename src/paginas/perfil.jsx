import React from "react";
import "../css/perfil.css";
import "../css/logo.css";
import Menu from "../componentes/menu";
import { Link } from "react-router-dom";

function Perfil() {
  return (
    <div className="perfil-container">
      {}
      <Menu/>
      <div className="perfil-content">
        {}
        <div className="perfil-form">
          <h1>Bienvenido "Usuario"</h1>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Correo Electrónico:</label>
              <input type="text" className="form-control" id="email" placeholder="Usuario@gmail.com" />
            </div>
            <div className="col-md-6">
              <label htmlFor="direccion" className="form-label">Dirección (Opcional):</label>
              <input type="text" className="form-control" id="direccion" placeholder="Escribe algo..." />
            </div>
            <div className="col-md-6">
              <label htmlFor="nombre" className="form-label">Nombre:</label>
              <input type="text" className="form-control" id="nombre" placeholder="Usuario" />
            </div>
            <div className="col-md-6">
              <label htmlFor="pais" className="form-label">País (Opcional):</label>
              <input type="text" className="form-control" id="pais" placeholder="Escribe algo..." />
            </div>
            <div className="col-md-6">
              <label htmlFor="fecha" className="form-label">Fecha de nacimiento:</label>
              <input type="text" className="form-control" id="fecha" placeholder="DD / MM / AA" />
            </div>
            <div className="col-md-6">
              <label htmlFor="sexo" className="form-label">Sexo:</label>
              <input type="text" className="form-control" id="sexo" placeholder="Femenino/Masculino" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

