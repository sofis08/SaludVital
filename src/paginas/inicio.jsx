import React from "react";
import Menu from "../componentes/menu";
import "../css/inicio.css";

function Inicio() {
  return (
    <div>
      <Menu />
      <div className="inicio-container">
        
        {}
        <h1 className="inicio-title">
          Consejos de algunos expertos:
        </h1>
        
        {}
        <div className="container text-center">
          <div className="row">
            <div className="col col1">
              <strong>¿Por qué ejercitar mi cuerpo es bueno?</strong>
              <a> Ejercitarte mejora la salud, aumenta energía, fortalece músculos y previene enfermedades.</a>
            </div>
            <div className="col col2">
              <strong>¿Por qué comer bien es bueno para mi cuerpo?</strong>
              <a> Comer bien ayuda a tu energía y salud general.</a>
            </div>
            <div className="col col3">
              <strong>¿Por qué dormir bien ayuda a mi cuerpo?</strong>
              <a> Dormir bien repara el cuerpo, mejora la memoria, fortalece el sistema inmunológico y regula el ánimo.</a>
            </div>
            <div className="col col4">
              <strong>¿Por qué tener una buena salud mental es importante?</strong>
              <a> Tener una buena salud mental mejora el bienestar, reduce el estrés, aumenta la felicidad y fortalece las relaciones.</a>
            </div>
            <div className="col col5">
              <strong>¿Por qué tener una relación sana con tus seres queridos es importante?</strong>
              <a> Tener una relación sana con tus seres queridos brinda apoyo emocional, fortalece la confianza y mejora el bienestar general.</a>
            </div>
          </div>
        </div>

        {}
        <h2 className="second-title">
          Sobre nosotros:
        </h2>

        {}
        <div className="bottom-image-container">
          <div className="text-overlay-right">
            <h3></h3>
            <p>Bienvenidos a nuestra pagina de salud general, diseñada para ofrecerte consejos practicos y recursos que te ayuden a mejorar tu bienestar físico y mental. Aquí encontrarás herramientas para vivir de forma más saludable y equilibrada.</p>
            <p> <strong> Contáctenos:Saludvital@gmail.com </strong></p>
            <p><strong>Teléfono: 314458799</strong></p>
            <p><strong>Instagram: @salud_vital</strong></p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Inicio;






