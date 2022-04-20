import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from 'react-router-dom';
import home from './components/home';
import about from './components/about';
//import contact from './components/contact'; 

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Routes>
      <Route exact paths='/' elements={<Home />}></Route>
      <Route exact paths='/about' elements={<About />}></Route>
      <Route exact paths='/contact' elements={<Contact />}></Route>
    </Routes>
    </Router>
  );
}

export default App;
