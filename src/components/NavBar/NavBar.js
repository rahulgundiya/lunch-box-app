import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button'
// import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
//import Nav from 'react-bootstrap/Nav'
import React from 'react';
import classes from './NavBar.module.css'
// import Items from '../LunchBuilder/Items/Items'
//import LunchItems from '../../containers/LunchItems/LunchItems';
const navBar =()=>{

return (
    <>
  
  <Navbar bg="primary" variant="dark" className={classes.Test}>
    <Navbar.Brand href="#home" className={classes.Brand}>
        Today-Menu</Navbar.Brand>
       
  
  </Navbar>
  
  </>
)
}

export default navBar;

