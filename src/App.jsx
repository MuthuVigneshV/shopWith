import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState({});

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout  cart={ cart } setCart={ setCart }/>}>
        <Route path='/' element={<Home cart={ cart } setCart={ setCart }/>}></Route>
        <Route path='/cart' element={<Cart cart={ cart } setCart={ setCart }/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
