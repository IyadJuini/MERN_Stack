import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import AllProducts from './components/AllProducts'
import './App.css'
import Show from './components/Show'

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
    <Route path='/:id' element ={<Show/>}/>
      
  </Routes>
    </>
  )
}

export default App
