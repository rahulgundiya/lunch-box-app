import React from 'react'
import ReactAux from '../../../hoc/ReactAux/ReactAux'
import classes from './OrderSummary.module.css' 
const orderSummary=(props)=>{
const transformed= Object.keys(props.ingredients)
.map(igKey=>{
    return (
    <li key={igKey} >
    <span style={{textTransform:'capitalize' ,marginRight:'400px'}} 
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
        <p>Continue TO CheckOut</p>
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