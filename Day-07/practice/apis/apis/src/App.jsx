import { useState } from 'react'
import './App.css'

function App() {
  const [pokémon, setPokémon] = useState([])
  const fetchAPI = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(jsonResponse => {
        console.log("RESPONSE FROM API : ", jsonResponse.results)
        setPokémon(jsonResponse.results) 
      })
      .catch(error => console.log(error))
    }
  return (
    <>
    <fieldset>
    <legend>
          <h1>👾👾Pokemon API👾👾</h1>
        </legend>
        <button onClick={fetchAPI}>fetch Pokémon API</button>
    </fieldset>
    <fieldset style={{ background: "aqua" }}>
          <legend>fetch Pokémon</legend>
          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {pokémon.map((hero,i) => <tr key={i}>
                <td>{hero.name}</td>
              </tr>)}
            </tbody>
          </table>
        </fieldset>
    </>
  )
}

export default App
