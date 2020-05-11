import React from 'react';
import classes from './Item.module.css';
const item = (props) => (
    <div className={classes.BuildControl} >
<div className={classes.Label} >{props.label}</div>
<button className={classes.More} onClick={props.added} >ADD</button>
    </div>
)  

export default item;

// <div className={classes.Link}>
//  <Items />
//  <LunchItems/>
// </div>