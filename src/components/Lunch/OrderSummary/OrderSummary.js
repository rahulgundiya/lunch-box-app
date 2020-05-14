import React from 'react'
import ReactAux from '../../../hoc/ReactAux/ReactAux'
const orderSummary=(props)=>{
const transformed= Object.keys(props.ingredients)
.map(igKey=>{
    return (
    <li key={igKey} style={{marginRight:'400px'}}>
    <span style={{textTransform:'capitalize',display:'inline-block'}}  >{igKey}</span>
    {props.ingredients[igKey]}
    </li>)
})
return (
    <ReactAux>
        <h3>Your Lunch-Box</h3>
        <p>A delecious Lunch-Box with following ingredients:</p>
        <ul>
            {transformed}
        </ul>
        <p>Continue TO CheckOut</p>
        <button 
             onClick={props.purchaseCancelled}>
                 CANCEL</button>
            <button 
            onClick={props.purchaseContinued}>
                CONTINUE</button> 
        </ReactAux>
)
}
export default orderSummary;