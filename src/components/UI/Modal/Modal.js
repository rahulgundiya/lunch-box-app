import React from 'react'
import ReactAux from '../../../hoc/ReactAux/ReactAux'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
const modal =(props)=>(
    <ReactAux>
    <Backdrop show={props.show} />
    <div className={classes.Modal}
    style={{transform:props.show?'translateY(0)' : 'translate(-100vh)',
    opacity:props.show?'1' :'0'}}>
        {props.children}

    </div>

    </ReactAux>


)
export default modal;