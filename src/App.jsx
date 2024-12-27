import { useState } from "react";
import "./App.css";
import Person from "./pages/Person";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="general-information">
        <Person />
        <div className="studies-information">
          <h4 className="section">Estudios</h4>
          <p>Bachillerato ponzoñoso</p>
          <p>Fp en ponzoña</p>
        </div>
        <div className="languages-information">
          <h4 className="section">Idiomas</h4>
          <p>Inglés B2</p>
        </div>
        <div className="skills-information">
          <h4 className="section">Habilidades</h4>
          <ul>
            <li>Java</li>
            <li>PHP</li>
            <li>Laravel</li>
          </ul>
        </div>
        <div className="competences-information">
          <h4 className="section">Aptitudes</h4>
          <ul>
            <li>Trabajo en equipo</li>
            <li>Asertividad</li>
            <li>Organización</li>
          </ul>
        </div>
      </div>
      <div className="experience-information">
        <div className="laboral-information">
          <h4 className="section">Experiencia laboral</h4>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <div className="links-information">
          <h4 className="section">Links de interés</h4>
          <a href="https://www.linkedin.com/in/marta-tao-fern%C3%A1ndez-navas-11966619b/">
            LinkedIn
          </a>
          <br />
          <a href="https://github.com/MartaTao">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default App;
