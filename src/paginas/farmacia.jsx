import React from "react";
import "../css/farmacia.css";
import "../css/logo.css";
import { Link } from "react-router-dom";
import pp from "../assets/img/acetam.png";
import trime from "../assets/img/trimebt.png";
import beclo from "../assets/img/beclomet.png";
import amoxi from "../assets/img/Amoxicilina.png";
import ibu from "../assets/img/Ibuprofeno.png";
import nitro from "../assets/img/images.png";
import levo from "../assets/img/postday.png";
import losa from "../assets/img/Losartan.png";
import Bila from "../assets/img/Bilastina.png";
import Menu from "../componentes/menu";


function Farmacia() {
  return (
    <div className="farmacia-container">
      <Menu />
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
      <div className="container mb-5">
        <div className="precauciones-container mx-auto">
          <p> Aquí encontrarás información sobre diversos medicamentos y sus precauciones</p>
        </div>
      </div>

      <div className="card-group mb-5">
        <div className="card">
          <img src={pp} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Acetaminofen</h5>
              <p className="card-text">se utiliza habitualmente para bajar la fiebre y aliviar el dolor de cabeza, muscular, menstrual, de garganta, de muelas y de espalda.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
          <img src={trime} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Trimebutina</h5>
              <p className="card-text">Tratamiento de refuerzo de diarreas en gastroenteritis en Pediatría (A). Tratamiento del dolor abdominal y otros trastornos abdominales incluyendo el síndrome del colon irritable (SCI) e íleo paralitico posoperatorio.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
          <img src={beclo} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Beclometasona</h5>
              <p className="card-text">La beclomometasona se utiliza para evitar la dificultad para respirar, opresión en el pecho, sibilancia y tos ocasionado por asma en adultos y niños mayores de 5 años</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
      </div>

      <div className="card-group mb-5">
        <div className="card">
          <img src={amoxi} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Amoxicilina</h5>
              <p className="card-text">La amoxicilina se usa para tratar ciertas infecciones causadas por bacterias, como neumonía, bronquitis (infección de las vías respiratorias que van a los pulmones) e infecciones de los oídos, la nariz, la garganta, las vías urinarias y la piel.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
          <img src={ibu} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Ibuprofeno</h5>
              <p className="card-text">El ibuprofeno alivia el dolor y baja la fiebre. En algunos pacientes suele ser más efectivo para aliviar el dolor de corta duración de tipo menstrual, dental, de garganta, esguinces o torceduras</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
          <img src={nitro} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Nitrofuratoina</h5>
              <p className="card-text">La nitrofurantoina se utiliza para tratar las infecciones del tracto urinario. La nitrofurantoina pertenece a una clase de medicamentos llamados antibióticos. Su acción consiste en eliminar las bacterias que causan las infecciones.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
      </div>

      <div className="card-group">
        <div className="card">
          <img src={levo} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Levonorgestrel</h5>
              <p className="card-text">El levonorgestrel es una progestina usada como anticonceptivo de emergencia para evitar el embarazo si se toma dentro de las 72 horas posteriores a una relación sexual sin protección</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
          <img src={losa} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Losartan</h5>
              <p className="card-text">Medicamento que se usa para tratar la presión arterial alta.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
          <img src={Bila} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Bilastina </h5>
              <p className="card-text">En estudios de fase I o II en voluntarios sanos, la administración de 20 mg de bilastina inhibió la reacción inducida por histamina, con la misma eficacia que 10 mg de cetirizina o 25 mg de hidroxicina.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
      </div>
      
      

    </div>
  );
}

export default Farmacia;

