import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/header/Header'
import Footer from './pages/footer/footer'
import Home from './pages/home/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
     
    </>
  )
}

export default App
