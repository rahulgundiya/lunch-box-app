import React from 'react'
//import classes from './BuildControls.module.css'
import Item from '../Item/Item'
import classes from './Items.module.css'


const controls =[
    {label:'Daal' , type:'daal'},
    {label:'Chanval' , type:'chanval'},
    {label:'Panner' , type:'panner'},
    {label:'Rooti' , type:'rooti'},
    {label:'Parathe' , type:'parathe'}

]
const items = (props) => (
    <div className={classes.Items}>
    
  {controls.map(ctrl=>(
      <Item
       key={ctrl.label} 
        label={ctrl.label} 
        type={ctrl.type}
         added = {()=>props.ingredientsAdd(ctrl.type )}

        />
  ))}
      {/* <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}  onClick={props.ordered}  >Order-Now
      </button> */}
    </div>
)

export default items;  