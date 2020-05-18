import React from 'react'
import classes from './Lunch.module.css';
import Navbar from 'react-bootstrap/Navbar'
const Lunch = (props) => {
      const { ingredients } = props
    let finalArray = []      
        Object.keys(ingredients).map(function (key) {
            return  finalArray.push({ name: key, quantity: ingredients[key] })
              // return [key:key, ingredients[key]];
          });
          console.log('Ingredients' , finalArray);
    return(
    <div>
        {props.show ? <Navbar  variant="dark" className={classes.Test}>
    <Navbar.Brand href="#home" className={classes.Brand} >
    Your-LunchBox  {props.price>0 ? <p className={classes.Price}>Current-Price:{props.price}</p>:''} </Navbar.Brand>
  </Navbar>:''}
    <div className={classes.Link}>
    {finalArray.map((res,i) =>
    (res.quantity > 0 ?
    <div className={classes.ItemsControl}  key={i}>
    <div className={classes.Key}> {res.name}</div>
    <div className={classes.Count}>{res.quantity}</div>
    {/* <button className={classes.Button} onClick={()=>
      {props.removeIngredientHandler(res)}}>Less</button> */}
      <button className={classes.Button} 
      onClick={()=>{props.removeIngredientHandler(res)}}>Less
        </button>
    </div> :''))}
  </div> 
  {props.show? <button 
    className={classes.Order} onClick={props.orderd} >Order</button> :''}
  
  </div>
    )
    }

export default Lunch;