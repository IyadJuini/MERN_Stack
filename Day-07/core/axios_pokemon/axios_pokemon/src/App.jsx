import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pokémonAxios, setPokémonAxios] = useState([])
  const axiosAPI = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response =>{ 
        setPokémonAxios(response.data.results) 
        console.log("AXIOS RESPONSE :", response.data.results)
      })
      .catch(error => console.log(error))
      }
  return (
    <>
    <fieldset>
    <legend>
          <h1>👽👽Pokemon API👽👽</h1>
        </legend>
        <button onClick={axiosAPI}>Axios Pokémon API</button>
    </fieldset>
    <fieldset style={{ background: "aqua" }}>
          <legend>Axios Pokémon</legend>
          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {pokémonAxios.map((hero,i) => <tr key={i}>
                <td>{hero.name}</td>
              </tr>)}
            </tbody>
          </table>
        </fieldset>
    </>
  )
}

export default App
