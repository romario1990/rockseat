import React, { useState, useEffect} from 'react';
import api from './services/api';
import DevItem from './componentes/DevItem';
import DevForm from './componentes/DevForm';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HMTL, CSS e JS. O qual n�o interfere no restante da aplica��o
// Propriedade: Informa��es que um componente PAI passa para o componente FILHO
// Estado: Informa��es mantidas pelo componente (Lembrar Imutabilidade)

function App() {
  const [ devs, setDevs] = useState([]);

  useEffect(()=>{
    async function loadDevs() {
      const response = await api.get('/devs');
      
      setDevs(response.data);
    }

    loadDevs();
  }, []);
 
  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
     <div id="app">
       <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
       </aside>
       <main>
        <ul>
          {devs.map(dev =>(
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
       </main>
     </div>
  );
}

export default App;
