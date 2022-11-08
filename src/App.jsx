
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Home from './home.jsx'
import Login from './login.jsx'
import Cadastro from './cadastro.jsx'
import './App.css'

function App() {
  return (
    <div>

      

      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
