
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
import Contact from './pages/contact/contact';


function App() {
  

  return (
    <Router>
      

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/consult' element={<ConsultPage/>}/>
          <Route path='/labtest' element={<LabTest/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>

      
    </Router>
  )
}

export default App
