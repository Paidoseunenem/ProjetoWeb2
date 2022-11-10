import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './home.jsx'
import Login from './login.jsx'
import Cadastro from './cadastro.jsx'



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
