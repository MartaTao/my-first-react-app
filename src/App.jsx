import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="general-information">
        <Person/>
        <div className='studies-information'>
          <h4 className='section'>Estudios</h4>
          <p>Bachillerato ponzoñoso</p>
          <p>Fp en ponzoña</p>
        </div>
        <div className='languages-information'>
        <h4 className='section'>Idiomas</h4>
          <p>Inglés B2</p>
        </div>
        <div className='skills-information'>
          <h4 className='section'>Habilidades</h4>
            <ul>
              <li>Java</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
        </div>
        <div className='competences-information'>
          <h4 className='section'>Aptitudes</h4>
            <ul>
              <li>Trabajo en equipo</li>
              <li>Asertividad</li>
              <li>Organización</li>
            </ul>
        </div>
      </div>
      <div className='experience-information'>
          <div className="laboral-information">
          <h4 className='section'>Experiencia laboral</h4>
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>
          <div className="links-information">
          <h4 className='section'>Links de interés</h4>
              <a href="https://www.linkedin.com/in/marta-tao-fern%C3%A1ndez-navas-11966619b/">LinkedIn</a><br />
              <a href="https://github.com/MartaTao">GitHub</a>
          </div>
      </div>
      
    </div>
  )
}
function Person(){
  const [person, setPerson] = useState({name: 'Lapon Zoña', phone: '666666666', email: 'laponzoña@gmail.com', province: 'Sevilla', country:'España'});
  const [btnText, setText] = useState('Editar');
  const [disabled, setDisabled] = useState(true);

  const handleEditPersonalInfo = () => {
    const newPerson = { ...person };
    setPerson(newPerson);
  };

  const handleEnableEditPersonalInfo = () => {
    setText('Guardar')
    setDisabled(false);
  };

  return (
    <>
      <div className='personal-information'>
            <div className='photo'>
            <a href="https://vitejs.dev" target="_blank">
                <img src={reactLogo} className="logo" alt="Vite logo" />
              </a>
            </div>
            <div>
              <div className='personal-input'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
              <Input val={person.name} disabled={disabled}/>
              </div>
              <div className='personal-input'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path></svg>
              <Input val={person.phone} disabled={disabled}/>
              </div>
              <div className='personal-input'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
              <Input val={person.email} disabled={disabled}/>
              </div>
              <div className='personal-input'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
              <Input val={person.province} disabled={disabled}/>
              <Input val={person.country} disabled={disabled}/>
              </div>
            </div>
          </div>
          <Button handleClick= {handleEnableEditPersonalInfo} text={btnText}/>
    </>
  );
}
function Input({val, disabled}) {
  const [value, setValue] = useState(val);
  return (
    <input
      type="text"
      value={value}
      disabled = {disabled}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
function Button({ text, handleClick }) {
  return (
    <button onClick={handleClick} >
      {text}
    </button>
  );
}
export default App
