import React from "react";
import "../css/ajustes.css";
import "../css/logo.css";
import { Link } from "react-router-dom";

function Ajustes() {
  return (
    <div>
      <div className="ajustes-container">
        <Link to="/" className="logo-link">
          <span className="logo"></span>
          SaludVital
        </Link>
        <h1>En esta sección se hará los ajustes </h1>
      </div>
    </div>
  );
}

export default Ajustes;
