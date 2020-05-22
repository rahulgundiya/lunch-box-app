import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import classes from './NavBar.module.css'
import {NavLink} from 'react-router-dom'
const navBar =()=>{

return (
    <> 
  <Navbar bg="primary" variant="dark" className={classes.Test}>
    <Navbar.Brand  className={classes.Brand}>
        Today-Menu 
            
        </Navbar.Brand>
        <NavLink 
             to="/orders" className={classes.Price} >
              Orders</NavLink>
        
  </Navbar>
  </>
)
}

export default navBar;




// import React, { useState, useEffect } from 'react'
// import classes from './Lunch.module.css';
// import Navbar from 'react-bootstrap/Navbar'


// export default function Lunch(props) {
//     const [finalArray, setfinalArray] = useState([])
//     const { ingredients } = props

//     useEffect(()=>{
//         Object.keys(ingredients).map(function (key) {
//              setfinalArray(prevState=>[
//                  ...prevState,{ name: key, quantity: ingredients[key] }
//              ])
//         });
//     },[ingredients])

//     const deleteData = (quantity, index) => {

//         console.log('Delete', finalArray)
//         const oldCount = quantity.quantity
//         const updatedCount = oldCount - 1;
//         console.log('updatedCount', updatedCount);
//         if (updatedCount === 0) {
//             console.log(finalArray)
//             setfinalArray(finalArray.splice(index, 1))
             
//         }
//         //return finalArray.push({quantity:updatedCount})




//     }


//     return (

//         <div>
//             <Navbar variant="dark" className={classes.Test}>
//                 <Navbar.Brand href="#home" className={classes.Brand}>
//                     Your-LunchBox</Navbar.Brand>
//             </Navbar>
//             <div className={classes.Link}>
//                 {finalArray.map((res, i) =>
//                     (res.quantity > 0 ?
//                         <div className={classes.ItemsControl} key={i}>
//                             <div className={classes.Key}> {res.name}</div>
//                             <div className={classes.Count}>{res.quantity}</div>
//                             <button className={classes.Button} onClick={() => deleteData(res, i)} >Less</button>
//                         </div> : ''))}
//             </div>
//         </div>
//     )
// }