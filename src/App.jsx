
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
import { CartContextProvider } from './pages/cartcontext/cartcontext';
import Cart from './pages/cart/cart';
import Wintercare from './pages/Wintercare/wintercare';


function App() {
  

  return (
    <CartContextProvider >
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/wintercare' element={<Wintercare/>}/>
            <Route path='/consult' element={<ConsultPage/>}/>
            <Route path='/labtest' element={<LabTest/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart/>}/>            
        </Routes>
      </Router>
    </CartContextProvider >
  )
}

export default App
