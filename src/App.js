import React from 'react';
import NavBar from  './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import LunchItems from './containers/LunchItems/LunchItems'
import LunchItems from './containers/LunchItems/LunchItems'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LunchItems/>
          </div>
  );
}

export default App;
