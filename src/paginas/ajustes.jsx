import React from "react";
import "../css/ajustes.css";
import "../css/logo.css";
import Menu from "../componentes/menu";
import { Link } from "react-router-dom";

function Ajustes() {
  return (
    <div>
      <Menu />
      <div className="ajustes-container">

        <h1>Ajustes: </h1>
        <h3>Notificaciones:</h3>

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
          <label className="form-check-label" for="checkNativeSwitch">
            <strong>Notificaciones:</strong>
          </label>
        </div>

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
          <label className="form-check-label" for="checkNativeSwitch">
            <strong>No interrumpir: </strong>
          </label>
        </div>

        <h3>General:</h3>

        <div className="col-md-3">
          <label for="validationDefault04" className="form-label">Tema:</label>
        </div>
        <div className="col-md-3">
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">Oscuro</option>
            <option>claro</option>
          </select>
        </div>

        <h3>lenguaje:</h3>

        <div className="col-md-3">
          <label for="validationDefault04" className="form-label">Elige tu idioma</label>
        </div>
        <div className="col-md-3">
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">español</option>
            <option>ingles</option>
            <option>portugues</option>
            <option>mandarin</option>
            <option>ruso</option>
            <option>frances</option>
            <option></option>
          </select>
        </div>



      </div>
    </div>
  );
}

export default Ajustes;
