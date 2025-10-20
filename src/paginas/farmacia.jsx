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
import Metf from "../assets/img/metformina.png";
import Lora from "../assets/img/Loratadina.png";
import Omep from "../assets/img/Omeprazol.png";
import Monte from "../assets/img/montelukast.png";
import Enala from "../assets/img/enalapril.png";
import Sertra from "../assets/img/sertralina.png";
import Diaze from "../assets/img/diazepam.png";
import Clor from "../assets/img/clopidogel.png";
import Fur from "../assets/img/Furosemida.png";
import Cip from "../assets/img/Ciprofloxacino.png";
import Lev from "../assets/img/Levotiroxina.png";
import Clon from "../assets/img/clonazepam.png";
import Nap from "../assets/img/naproxeno.png";
import Pred from "../assets/img/prednisona.png";
import Salbuta from "../assets/img/salbut.png";
import Adri from "../assets/img/adrisin.png";
import Clorfe from "../assets/img/clorfenamina.png";
import Digo from "../assets/img/digoxina.png";
import Capto from "../assets/img/captopril.png";
import Metro from "../assets/img/metronidazol.png";
import Dexa from "../assets/img/dexametasona.png";


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
          <img src={pp} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Acetaminofen</h5>
            <p className="card-text">se utiliza habitualmente para bajar la fiebre y aliviar el dolor de cabeza, muscular, menstrual, de garganta, de muelas y de espalda.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={trime} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Trimebutina</h5>
            <p className="card-text">Tratamiento de refuerzo de diarreas en gastroenteritis en Pediatría (A). Tratamiento del dolor abdominal y otros trastornos abdominales incluyendo el síndrome del colon irritable (SCI) e íleo paralitico posoperatorio.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={beclo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Beclometasona</h5>
            <p className="card-text">La beclomometasona se utiliza para evitar la dificultad para respirar, opresión en el pecho, sibilancia y tos ocasionado por asma en adultos y niños mayores de 5 años</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
      </div>

      <div className="card-group mb-5">
        <div className="card">
          <img src={amoxi} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Amoxicilina</h5>
            <p className="card-text">La amoxicilina se usa para tratar ciertas infecciones causadas por bacterias, como neumonía, bronquitis (infección de las vías respiratorias que van a los pulmones) e infecciones de los oídos, la nariz, la garganta, las vías urinarias y la piel.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={ibu} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ibuprofeno</h5>
            <p className="card-text">El ibuprofeno alivia el dolor y baja la fiebre. En algunos pacientes suele ser más efectivo para aliviar el dolor de corta duración de tipo menstrual, dental, de garganta, esguinces o torceduras</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={nitro} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Nitrofuratoina</h5>
            <p className="card-text">La nitrofurantoina se utiliza para tratar las infecciones del tracto urinario. La nitrofurantoina pertenece a una clase de medicamentos llamados antibióticos. Su acción consiste en eliminar las bacterias que causan las infecciones.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
      </div>

      <div className="card-group">
        <div className="card">
          <img src={levo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Levonorgestrel</h5>
            <p className="card-text">El levonorgestrel es una progestina usada como anticonceptivo de emergencia para evitar el embarazo si se toma dentro de las 72 horas posteriores a una relación sexual sin protección</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={losa} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Losartan</h5>
            <p className="card-text">Medicamento que se usa para tratar la presión arterial alta.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Bila} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bilastina </h5>
            <p className="card-text">En estudios de fase I o II en voluntarios sanos, la administración de 20 mg de bilastina inhibió la reacción inducida por histamina, con la misma eficacia que 10 mg de cetirizina o 25 mg de hidroxicina.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
      </div>

      <div className="card-group mb-5">
        <div className="card">
          <img src={Metf} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Metformina</h5>
            <p className="card-text">Es un antidiabético oral del grupo de las biguanidas. Disminuye la producción hepática de glucosa y mejora la sensibilidad a la insulina, siendo el fármaco de primera línea en diabetes tipo 2.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Lora} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Loratadina</h5>
            <p className="card-text">Antihistamínico de segunda generación, no sedante. Inhibe los efectos de la histamina en receptores H1, útil en rinitis alérgica y urticaria.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Omep} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Omeprazol</h5>
            <p className="card-text">Inhibidor de la bomba de protones (IBP). Suprime la secreción gástrica de ácido clorhídrico al inhibir de forma irreversible la H+/K+ ATPasa gástrica.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
      </div>

      <div className="card-group mb-5">
        <div className="card">
          <img src={Monte} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Montelukast</h5>
            <p className="card-text">Antagonista de los receptores de leucotrienos. Reduce la inflamación y broncoconstricción en asma y rinitis alérgica. Uso profiláctico, no en crisis agudas.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Enala} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Enalapril</h5>
            <p className="card-text">Inhibidor de la enzima convertidora de angiotensina (IECA). Disminuye la presión arterial al reducir la producción de angiotensina II.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Sertra} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Sertralina</h5>
            <p className="card-text">Inhibidor selectivo de la recaptación de serotonina (ISRS). Utilizado en el tratamiento de la depresión, trastorno de ansiedad y TOC.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
      </div>

      <div className="card-group mb-5">
        <div className="card">
          <img src={Diaze} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Diazepam</h5>
            <p className="card-text">Benzodiacepina de acción prolongada. Actúa sobre receptores GABA-A con efectos ansiolíticos, anticonvulsivantes, sedantes y relajantes musculares.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Clor} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Clopidogrel</h5>
            <p className="card-text">Antiagregante plaquetario. Inhibe de forma irreversible el receptor P2Y12 de ADP en las plaquetas, reduciendo el riesgo de eventos trombóticos.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Fur} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Furosemida</h5>
            <p className="card-text">Diurético de asa que inhibe el cotransportador Na⁺/K⁺/2Cl⁻ en la rama ascendente del asa de Henle. Útil en edema y crisis hipertensivas.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
      </div>

      <div className="card-group mb-5">
        <div className="card">
          <img src={Cip} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ciprofloxacino</h5>
            <p className="card-text">Antibiótico del grupo de las fluoroquinolonas. Inhibe la ADN girasa bacteriana. Indicado en infecciones urinarias, respiratorias y gastrointestinales.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Lev} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Levotiroxina sódica</h5>
            <p className="card-text">Hormona tiroidea sintética (T4). Utilizada en el tratamiento del hipotiroidismo para normalizar los niveles de TSH y mejorar síntomas.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Clon} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Clonazepam</h5>
            <p className="card-text">Se usa para tratar la ansiedad, el insomnio y algunas convulsiones. Debe consumirse bajo control médico, ya que puede causar dependencia.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
      </div>

      <div className="card-group mb-5">
        <div className="card">
          <img src={Nap} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Naproxeno</h5>
            <p className="card-text">Sirve para aliviar el dolor y reducir la inflamación en casos de artritis, cólicos menstruales o dolores musculares.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Pred} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Prednisona</h5>
            <p className="card-text">Es un corticoide que se usa para reducir inflamaciones fuertes o reacciones alérgicas severas. Debe tomarse bajo supervisión médica.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
         <div className="card">
          <img src={Salbuta} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Salbutamol</h5>
            <p className="card-text">Broncodilatador que ayuda a abrir las vías respiratorias. Se utiliza en el tratamiento del asma y otras enfermedades respiratorias.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
      </div>

      <div className="card-group mb-5">
        <div className="card">
          <img src={Adri} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Adrisin</h5>
            <p className="card-text">Medicamento homeopático útil como coadyuvante en cuadros alérgicos, principalmente cutáneos y también respiratorios</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Clorfe} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Clorfenamina</h5>
            <p className="card-text">Antihistamínico que se usa para tratar alergias, resfriados y picazón. Puede causar somnolencia.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Digo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Digoxina</h5>
            <p className="card-text">AMedicamento para controlar problemas del corazón como la insuficiencia cardíaca y ciertas arritmias.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
      </div>

      <div className="card-group mb-5">
        <div className="card">
          <img src={Capto} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Captopril</h5>
            <p className="card-text">Se utiliza para tratar la hipertensión y la insuficiencia cardíaca. Ayuda a relajar los vasos sanguíneos.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Metro} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Metronidazol</h5>
            <p className="card-text">Antibiótico y antiparasitario utilizado en infecciones gastrointestinales, vaginales o dentales.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={Dexa} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dexametasona</h5>
            <p className="card-text">Corticoide potente que reduce la inflamación y se usa en reacciones alérgicas, asma o inflamaciones severas.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>

        

      </div>


      </div>
      );
}

      export default Farmacia;

