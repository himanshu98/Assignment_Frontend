import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchBox from './components/SearchBox';
function App() {
  return (
    <div className="App">
      <h1>Polynomial equation Calculator</h1>
      <SearchBox />
      <NavBar />
    </div>
  );
}

export default App;
