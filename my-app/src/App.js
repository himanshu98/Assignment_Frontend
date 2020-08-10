import React from 'react';
import Login from './components/Login';
import './App.css';
import NavBar from './components/NavBar';
import SearchBox from './components/SearchBox';
function App() {
  return (
    <div className="App">
      <Login/>
      {/* <h3>Polynomial equation Calculator</h3>
      <br/>
      <br/>
      <SearchBox />
      <NavBar /> */}
    </div>
  );
}

export default App;
