import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Vans from "./pages/Vans"
import VansDetails from "./pages/VanDetails"
import Data from '../../Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/vans' element={<Vans/>}></Route>
        <Route path='vans/:id' element={<VansDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
