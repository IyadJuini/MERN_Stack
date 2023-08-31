import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const person = [
    {
      firstName: "John",
      lastName:"Doe",
      age: 22,
      hairColor:"Black"
    },
        {
      firstName: "Smith",
      lastName:"John",
      age:88,
      hairColor:"Brown"
    },
    {
      firstName: "Fillmore",
      lastName:"Millard",
      age:50,
      hairColor:"Brown"
    },
    {
      firstName: "Maria",
      lastName:"Smith",
      age:62,
      hairColor:"Brown"
    }
  ]
  return (
    <div className="App">
      {person.map((p,i)=>
      <PersonCard key ={i}
      firstName={p.firstName}
      lastName= {p.lastName}
      age={p.age}
      hairColor={p.hairColor}
      />
      )}
    </div>
  );
}


export default App;
