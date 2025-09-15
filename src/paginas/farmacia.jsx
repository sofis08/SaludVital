import React from "react";
import "../css/farmacia.css";
import "../css/logo.css";
import { Link } from "react-router-dom";
import pp from "../assets/img/acetam.png";
import trime from "../assets/img/trimebt.png";
import beclo from "../assets/img/beclomet.png";
import Menu from "../componentes/menu";


function Farmacia() {
  return (
    <div className="farmacia-container">
      <Menu/>
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

      <h1 className="title-container"> <strong>Farmacia </strong></h1>
      <div className="container">
        <div className="precauciones-container">
          <p> Aquí encontrarás información sobre diversos medicamentos y sus precauciones</p>
        </div>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pp} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Acetaminofén</h5>
              <p>Para niños: El acetaminofén ayuda a bajar la fiebre y aliviar dolores leves como los de cabeza o garganta. La dosis depende del peso y la edad, por eso siempre debe seguirse lo que indica el médico o el empaque. Es seguro si se usa correctamente, pero tomar demasiado puede afectar el hígado. No debe combinarse con otros medicamentos sin consultar al pediatra.</p> 

             <p>Para adultos mayores: El acetaminofén se usa para aliviar dolores comunes y controlar la fiebre. Es más seguro que otros analgésicos para personas mayores, especialmente si tienen problemas de estómago. Sin embargo, deben evitarse las dosis altas y el uso prolongado, ya que puede dañar el hígado, sobre todo si se consume alcohol o hay enfermedades hepáticas. Siempre es mejor consultarlo con el médico.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={trime} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={beclo} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Farmacia;

