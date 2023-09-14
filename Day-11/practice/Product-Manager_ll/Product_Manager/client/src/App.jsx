import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import AllProducts from './components/AllProducts'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes >
    <Route path='/' element={
            <>
            <AddProduct/>
            <AllProducts/>
            </>
    }/>
  </Routes>
    </>
  )
}

export default App
