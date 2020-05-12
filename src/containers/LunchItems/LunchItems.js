import React, {Component} from 'react'
import Items from '../../components/LunchBuilder/Items/Items'
import ReactAux from '../../hoc/ReactAux/ReactAux'
import classes from './LunchItems.module.css'
import Lunch from '../../components/Lunch/Lunch';
//import NavBar from '../../components/NavBar/NavBar'

class LunchItems extends Component {
    state={
        ingredients:{
            daal:0,
            panner:0 ,
            parathe:0,
            rooti:0,
            chanval:0
        }
        
    }


    addIngredientHandler=(type)=>{
       // console.log('Hi'  ,this.state.ingredients[type]);
        const oldCount = this.state.ingredients[type];   //type of ingredient are 
        const updatedCount = oldCount+1;               //in ingredients
                             
       // console.log('Ingredients' , this.state.ingredients)
        const updatedIngredients = {
            ...this.state.ingredients
        }
       
         updatedIngredients[type]=updatedCount;
        console.log('hii Type' , updatedIngredients);
         this.setState({ingredients:updatedIngredients})

          const data = this.state.ingredients;
         console.log('hii Data' , data)


    }
removeIngredientHandler=(quantity)=>{
    console.log("quantity",this.state.ingredients[quantity.name])
            const oldCount = this.state.ingredients[quantity.name];  
            if(oldCount <=0)
            {
                return;
            }
            const updatedCount = oldCount-1;                                                                                                             
            console.log('hii updatedcount' , updatedCount)
           
            const updatedIngredients = {               
                ...this.state.ingredients                 
        
            }
            //console.log('UpdatedIngredients' ,  updatedIngredients)
        
            updatedIngredients[quantity.name] = updatedCount;
            this.setState({ ingredients:updatedIngredients})
            
        
        }
         
    
   
    render(){
            
    console.log("state",this.state)    

return (
    
    <ReactAux>
         <div className={classes.Link}>
                   
   <Items ingredientsAdd={this.addIngredientHandler}
  
/>
 </div>
<Lunch ingredients= {this.state.ingredients} removeIngredientHandler={this.removeIngredientHandler} />
</ReactAux>
)

}
}

export default LunchItems;