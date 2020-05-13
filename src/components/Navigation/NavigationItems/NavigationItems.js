import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from '../NavigationItem/NavigationItem'
const navigationItems =(props)=>(
    <ul className={classes.NavigationItems}>
  <NavigationItem >Your-LunchBox</NavigationItem>
  <NavigationItem  >Your-Price</NavigationItem>
    </ul>
);
export default navigationItems;