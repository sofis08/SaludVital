import React from "react";
import "../css/login.css";
import "../css/logo.css";
import { Link } from "react-router-dom";

function Iniciosesion() {
  return (
    <div className="login-container">
      <div className="logo-container">
        <div className="logo"></div>
        <span className="logo-text">SaludVital</span>
      </div>
      {}
      <div className="login-form">
        <h1>Inicio de Sesión</h1>
        <form className="row g-3">
          <div className="col-md-10">
            <label htmlFor="inputEmail4" className="form-label">
              Correo electrónico
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-10">
            <label htmlFor="inputPassword4" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>

          {}
          <div className="col-12 links-row">
            <a href="#">¿Olvidaste tu contraseña?</a>
            <Link to="/registro">
              {}
              <a href="#">Registrarse</a>{}
            </Link>
          </div>

          {}
          <div className="col-12">
            <Link to="/">
            <button type="submit" className="btn btn-primary w-100">
              Iniciar Sesión
            </button>
            </Link>
          </div>
        </form>
      </div>

      {}
      <div className="login-img"></div>
    </div>
  );
}

export default Iniciosesion;
