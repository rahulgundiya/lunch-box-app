import React from 'react';
import classes from './NavigationItem.module.css'
//import {NavLink} from 'react-router-dom'
const navigationItem =(props)=>(
 
  <li className={classes.NavigationItem}>
      <p >
         {props.children}</p>
   </li>
    
);
export default navigationItem;