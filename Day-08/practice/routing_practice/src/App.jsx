import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import {Routes, Route, Link} from  'react-router-dom'
import Number from './components/Number'
import WordColored from './components/WordColored'

function App() {
  
  return (
    <>
      <Link to = '/home'></Link>
      <Routes>
        <Route path={'/home'} element={<Home/>}/>
      </Routes>
      <Link to = '/number'></Link>
      <Routes>
        <Route path={'/:number'} element={<Number/>}/>
      </Routes>
      <Routes>
        <Route path={'/:number/:col1/:col2'} element={<WordColored/>}/>
      </Routes>
    </>
  )
}

export default App
