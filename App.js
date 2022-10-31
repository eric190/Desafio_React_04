import { BrowserRouter as Router, Routes, Routes, Route } from 
'react-router-dom'

import Home from './home/Home'
import Teste from './teste/Teste'
import Rotas from './rotas/Rotas'

return (
  // rotas

  <Router>
     <Routes>
        <Route path="/" element={Home/>} />
        <Route path="/" element={Teste/>} />
        <Route path="/" element={Rotas/>} />


      </Routes>  

  </Router>
)



