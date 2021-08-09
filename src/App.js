import logo from './logo.svg';
import './App.css';

function App() {
  const { REACT_APP_NAME, REACT_APP_KEY } = process.env;
  console.log(process.env)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          ENV: {REACT_APP_NAME} <br />
          KEY: {REACT_APP_KEY}
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >



        </a>
      </header>
    </div>
  );
}

export default App;
