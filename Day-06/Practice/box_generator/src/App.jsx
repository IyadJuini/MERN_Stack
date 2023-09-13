import { useState } from 'react'
import MyForm from './components/MyForm'
import ShowBox from './components/ShowBox'
import './App.css'

function App() {
  const [colors, setColors] = useState([])
  const AddColor = (color)=>{
    setColors([...colors,color])
    console.log(color)
  }
  return (
    <>
    <MyForm AddColor = {AddColor}/>
    <ShowBox colors = {colors}/>
    </>
  )
}

export default App
