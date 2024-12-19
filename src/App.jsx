import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home/home'
import ConsultPage from './pages/consult/ConsultPage'
import LabTest from './pages/labtest/labtest';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/consult' element={<ConsultPage/>}/>
          <Route path='/labtest' element={<LabTest/>}/>
      </Routes>

      
    </Router>
  )
}

export default App
