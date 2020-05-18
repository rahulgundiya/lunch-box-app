import React from 'react'
import ReactAux from '../../../hoc/ReactAux/ReactAux'
import classes from './OrderSummary.module.css' 
const orderSummary=(props)=>{
    const data =props.totalPrice;
    console.log('TOTAL Price' , data);
const transformed= Object.keys(props.ingredients)
.map(igKey=>{
    return (
    <li key={igKey} >
    <span style={{textTransform:'capitalize' ,marginRight:'400px' ,color:'green'}} 
    >{igKey}:{props.ingredients[igKey]}</span>
    </li>)
})
return (
    <ReactAux>
        <h3 style={{color:'green'}}>Your Lunch-Box</h3>
        <p style={{color:'orange'}}>A delecious Lunch-Box with following ingredients:</p>
        <ul>
            {transformed}
        </ul>
<h3 style={{color:'pink' , marginRight:'90px'}}>TotalPrice:{data}</h3>
        <p style={{color:'red'}}>Continue TO CheckOut</p>
        <button 
             onClick={props.purchaseCancelled} className={classes.Cancel}>
                 CANCEL</button>
            <button 
            onClick={props.purchaseContinued} className={classes.Continue}>
                CONTINUE</button> 
        </ReactAux>
)
}
export default orderSummary;