import { useState } from 'react'
import Nav from './components/Nav'
import { Routes,Route,Navigate } from 'react-router-dom'
import NoteList from './components/NoteList';
import Note from './components/Note';
import NoteCreate from './components/NoteCreate';
import NoteEdit from './components/NoteEdit';

function App() {
  return (
    <>
      <div className="container mt-3">
        <Nav/>
      </div>
      {/* ------Routes------ */}
      <Routes>
        {/* {/ Notes List Route /} */}
        <Route path='/notes' element={<NoteList/>}/>

        {/* {/ One Note Route  /} */}
        <Route path='/notes/:id' element={<Note/>}/>

        {/* {/ Create Note Route  /} */}
        <Route path='/notes/new' element={<NoteCreate/>}/>

        {/* {/ Edit Note Route  */} 
        <Route path='/notes/:id/edit' element={<NoteEdit/>}/>

        {/* {/ Gard Route  */} 
        <Route path='*' element={<Navigate to = '/note' replace />}/>
        
        <Route></Route>
      </Routes>
    </>
  )
}

export default App