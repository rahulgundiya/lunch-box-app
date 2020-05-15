import React from 'react'
import classes from './Input.module.css'

const input =(props)=>{
   let formInput =null
   let validationError=null
   const inputClasses=[classes.InputElement]
   
    if(props.inValid && props.shouldValidated &&props.touched){
        console.log('Invalid' , props.inValid)
   console.log('PropsTouched' , props.touched)
      console.log('elementConfig' , props.elementConfig.placeholder)
 validationError = <p className={classes.ValidationError}>Enter {props.elementConfig.placeholder}</p>
  inputClasses.push(classes.Invalid)
   }

    switch(props.elementType){
        case('input'):
        formInput=<input
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}  
        {...props.elementConfig} 
        />
        break;
        case('select'):
        formInput=(<select
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}  
        >{props.elementConfig.options.map(option=>(
        <option key={option.value}>{option.displayValue}</option>
        ))}</select>)
       break;
        default:
            formInput=<input 
            className={inputClasses.join(' ')}
            {...props.elementConfig} 
            onChange={props.changed}  
            value={props.value} 
             />
    }
   return ( <div className={classes.Input}>
       <label className={classes.Label}>
           {props.label}
       </label>
       {formInput}
       {validationError}
   </div>)

}
export default input