import React from 'react';
import Login from './components/Login';
import './App.css';
import NavBar from './components/NavBar';
import SearchBox from './components/SearchBox';
function App() {
  const [count, setCount] = React.useState(0);
  const update = () => {
    setCount(1);
  }
  return (
    <div className="App">
      {count === 0 &&
        <Login change={update} />
      }
      {count === 1 &&
        <>
          <h3>Polynomial equation Calculator</h3>
          <br />
          <br />
          <SearchBox />
          <NavBar />
        </>}
    </div>
  );
}

export default App;
