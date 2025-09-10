import React from "react";
import "../css/record.css"; 
import "../css/logo.css";
import { Link } from "react-router-dom";

export default function Registro() {
  return (
    <div className="record-container">
      {}
      <div className="record-form">
        {}
        <div className="logo-container">
          <div className="logo"></div>
          <span className="logo-text">SaludVital</span>
        </div>

        <h2 className="mb-4 text-center">Registro</h2>
        <form className="row g-3 shadow p-4 rounded bg-white">
          {}
          <div className="col-12">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control custom-input" id="email" required />
          </div>

          {}
          <div className="col-13">
            <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
            <input type="date" className="form-control custom-input" id="fechaNacimiento" required />
          </div>

          {}
          <div className="col-14">
            <label htmlFor="password" className="form-label">Crea tu contraseña</label>
            <input type="password" className="form-control custom-input" id="password" required />
          </div>

          {}
          <div className="col-15">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="terms" required />
              <label className="form-check-label" htmlFor="terms">
                Acepto términos y condiciones
              </label>
            </div>
          </div>

          {}
          <div className="col-12">
            <Link to="/iniciosesion">
              <button className="btn custom-btn w-100" type="button">
                Registrarme
              </button>
            </Link>
          </div>
        </form>
      </div>

      {}
      <div className="record-img"></div>
    </div>
  );
}


