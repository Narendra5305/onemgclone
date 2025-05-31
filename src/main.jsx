import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HomeContextProvider } from "./pages/context/homecontext.jsx";
import { CartContextProvider } from './pages/cartcontext/cartcontext';


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <CartContextProvider >
      <HomeContextProvider>
        <App />
      </HomeContextProvider>
    </CartContextProvider>
  </StrictMode>,
)
