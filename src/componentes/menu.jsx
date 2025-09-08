import React from "react";
import { Link } from "react-router-dom";
import "../css/logo.css";
import "../css/menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <nav className="navbar navbar-light bg-white fixed-top border-bottom">
        <div className="container-fluid d-flex align-items-center">
          {}
          <Link  to='/'>
          <a
            className="navbar-brand fw-bold text-dark d-flex align-items-center me-3"
            href="#"
          >
            <span className="logo me-2"></span>
            SaludVital
          </a>
          </Link>

          {}
          <form className="search-form d-flex flex-grow-1 mx-2" role="search">
            <input
              className="search-input form-control form-control-sm"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
          </form>

          {}
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {}
          <div
            className="offcanvas offcanvas-end text-bg-light"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-dark" id="offcanvasNavbarLabel">
                Menú
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                <li className="nav-item">
                    <Link to='/tumedicode24horas'>
                  <a className="nav-link" aria-current="page" href="">
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
                    <Link to='/cuestionario'>
                  <a className="nav-link" href="#">
                    Cuestionario
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
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Más
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Opción 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Opción 2
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Otra opción
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;

