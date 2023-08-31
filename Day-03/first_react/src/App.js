import logo from './logo.svg';
import './App.css';

function App() {
  console.log("Hello from App.js ");
  const msg = "The first variable from App.js"
  let number = 23
  return (
    <div className="App">
      <h1>Hello From App.js 🌥🌞🌦🌞🌧🌞🌨🌞🌩🌞🌪</h1>
      <h2>
        Wht we are going to do today
      </h2>
      <ol>
        <li>Item 1 </li>
        <li>Item 2 </li>
      </ol>
      <h5>Message : {msg}</h5>
      <h5>Number : {number}</h5>
      <ul>
        {animal}
      </ul>
    </div>
  );
}

export default App;
