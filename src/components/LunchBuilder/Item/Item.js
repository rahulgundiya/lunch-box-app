import React from 'react';
import classes from './Item.module.css';
const item = (props) => (
    <div className={classes.ItemControl} >
<div className={classes.Label} >{props.label}</div>
<button className={classes.Less} onClick={props.removed}>Less</button>
<button className={classes.More} onClick={props.added} >ADD</button>
    </div>
)  

export default item;

// <div className={classes.Link}>
//  <Items />
//  <LunchItems/>
// </div>