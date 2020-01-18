import React, { useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HMTL, CSS e JS. O qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar Imutabilidade)

function App() {
  const [ github_username, setGithubUsername ] = useState('');
  const [ techs, setTechs ] = useState('');
  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');


  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);
 
  async function handleAddDev(e) {
    e.prevenDefault();
    
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude  
    });

    console.log(response.data); 
  }

  return (
     <div id="app">
       <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                />
            </div>
            
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                />
            </div>
          </div>
          
          <button type="submit">Salvar</button>
        </form>
       </aside>
       <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/26503549?s=400&u=149a8ec1292883d1b842c753dbb83e6454621e76&v=4" alt="Romario Vargas"/>
              <div className="user-info">
                <strong>Romario Vargas</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Bibliografia</p>
            <a href="https://github.com/romario1990">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/26503549?s=400&u=149a8ec1292883d1b842c753dbb83e6454621e76&v=4" alt="Romario Vargas"/>
              <div className="user-info">
                <strong>Romario Vargas</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Bibliografia</p>
            <a href="https://github.com/romario1990">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/26503549?s=400&u=149a8ec1292883d1b842c753dbb83e6454621e76&v=4" alt="Romario Vargas"/>
              <div className="user-info">
                <strong>Romario Vargas</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Bibliografia</p>
            <a href="https://github.com/romario1990">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/26503549?s=400&u=149a8ec1292883d1b842c753dbb83e6454621e76&v=4" alt="Romario Vargas"/>
              <div className="user-info">
                <strong>Romario Vargas</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Bibliografia</p>
            <a href="https://github.com/romario1990">Acessar perfil no github</a>
          </li>
        </ul>
       </main>
     </div>
  );
}

export default App;
