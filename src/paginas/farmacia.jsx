import React from "react";
import "../css/farmacia.css";
import "../css/logo.css";
import { Link } from "react-router-dom";

function Farmacia() {
  return (
    <div className="farmacia-container">
      <Link to="/" className="logo-link">
        <span className="logo"></span>
        SaludVital
      </Link>

      {}
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

      <h1  className="title-container"> <strong>Farmacia </strong></h1>
       <div className="precauciones-container">
            <h2></h2>
            <p> Aquí encontrarás información sobre diversos medicamentos y sus precauciones</p>
          </div>
    </div>
  );
}

export default Farmacia;

