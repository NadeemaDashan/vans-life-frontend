import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Vans from "./pages/Vans"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/vans' element={<Vans/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App