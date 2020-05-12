import React from 'react'
import classes from './Lunch.module.css';
import Navbar from 'react-bootstrap/Navbar'
//import ReactDOM from "react-dom";




const Lunch = (props) => {
  
    const { ingredients } = props
    let finalArray = []
    
   
      
        Object.keys(ingredients).map(function (key) {
            return  finalArray.push({ name: key, quantity: ingredients[key] })
              // return [key:key, ingredients[key]];
          });
          console.log('Ingredients' , finalArray);
                
           


       
       
  
      
   

    return (
    
    <div>
    <Navbar  variant="dark" className={classes.Test}>
    <Navbar.Brand href="#home" className={classes.Brand}>
        Your-LunchBox</Navbar.Brand>
  </Navbar>
 <div className={classes.Link}>
    {finalArray.map((res,i) =>
    (res.quantity > 0 ?
    <div className={classes.ItemsControl}  key={i}>
    <div className={classes.Key}> {res.name}</div>
    <div className={classes.Count}>{res.quantity}</div>
    <button className={classes.Button} onClick={()=>{props.removeIngredientHandler(res)}}>Less</button>
    </div> :''))}
  </div>    
  </div>
    )
    }

export default Lunch;