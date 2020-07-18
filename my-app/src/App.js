import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchBox from './components/SearchBox';
function App() {
  return (
    <div className="App">
      <h3>Polynomial equation Calculator</h3>
      <br/>
      <br/>
      <SearchBox />
      <NavBar />
    </div>
  );
}

export default App;
