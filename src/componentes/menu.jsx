import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/logo.css";
import "../css/menu.css";

function Menu() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (

    <div className="menu-container">
      <nav className="navbar navbar-light bg-white fixed-top border-bottom">
        <div className="container-fluid d-flex align-items-center">

          <Link to='/'>
            <a
              className="navbar-brand fw-bold text-dark d-flex align-items-center me-3"
            >
              <span className="logo me-2"></span>
              SaludVital
            </a>
          </Link>

          <form className="d-flex flex-grow-1 mx-2" role="search">
            <input
              className="search-input form-control form-control-sm"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
          </form>

          <button
            className="navbar-toggler ms-2"
            type="button"
            onClick={toggleMenu} // Usamos la función de React
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen} // Estado dinámico
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} // Clase 'show' para expandir
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link to='/tumedicode24horas'>
                  <a className="nav-link" aria-current="page" href="#">
                    Medico 24h
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/urgencias'>
                  <a className="nav-link" href="#">
                    Urgencias
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/farmacia'>
                  <a className="nav-link" href="#">
                    Farmacia
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/'>
                  <a className="nav-link" href="#">
                    Contactenos
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/perfil'>
                  <a className="nav-link" href="#">
                    Perfil
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/ajustes'>
                  <a className="nav-link" href="#">
                    Ajustes
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/iniciosesion'>
                  <a className="nav-link" href="#">
                    Cerrar Sesion
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;