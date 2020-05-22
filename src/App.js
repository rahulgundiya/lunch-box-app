import React from 'react';
//import NavBar from  './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contactdata from './containers/Contactdata/Contactdata'
import {BrowserRouter,Switch ,Route} from 'react-router-dom'
//import LunchItems from './containers/LunchItems/LunchItems'
import LunchItems from './containers/LunchItems/LunchItems'
import Orders from './containers/Orders/orders'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
        <Route path = "/contact-data"  component={Contactdata}/>
        <Route path = "/" exact  component={LunchItems}/>
        <Route path = "/lunch-items"  component={LunchItems}/>
        <Route path = "/orders"  component={Orders}/>
        
        
       </Switch>
      {/* <NavBar/>
      <LunchItems/> */}
          </div>
          </BrowserRouter>
  );
}

export default App;
