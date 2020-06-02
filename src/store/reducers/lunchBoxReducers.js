import * as actionTypes from '../actions/actionTypes'
import {updatedObject} from './utility'
let initialState ={
    ingredients:{
        panner:0,
        daal:0,
        rooti:0,
        parathe:0,
        chanval:0
    },
    totalPrice:0,
    error:false,
    show:false,
    INGREDIENT_PRICES:{
        panner:40,
        daal:30,
        rooti:4,
        parathe:10,
        chanval:15

    }
}
const addIngredient=(state,action)=>{
    const updatedIngredient ={[action.ingredientName]:state.ingredients[action.ingredientName]+1}
    const updatedIngredients=updatedObject(state.ingredients,updatedIngredient);
    const updatedState={
        ingredients:updatedIngredients,
        totalPrice:state.totalPrice+state.INGREDIENT_PRICES[action.ingredientName],
        show:true
    }
    return updatedObject(state,updatedState);
}
const removeIngredient=(state,action)=>{
    const updatedIng ={[action.ingredientName]:state.ingredients[action.ingredientName] -1 }
    const updatedIngs=updatedObject(state.ingredients,updatedIng);
    let updatedSt={} 
    
    updatedSt={
        ingredients:updatedIngs,
        totalPrice:state.totalPrice-state.INGREDIENT_PRICES[action.ingredientName],
        
    }
    if(updatedSt.totalPrice===0)
    {
    updatedSt={
        ingredients:updatedIngs,
        totalPrice:state.totalPrice-state.INGREDIENT_PRICES[action.ingredientName],
        show:false
    }
    }
    console.log('updatedObject' ,updatedObject(updatedSt))
    //console.log('Show' ,initialState.show)
    return updatedObject(state,updatedSt)
    


}
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case(actionTypes.ADD_INGREDIENT):return addIngredient(state,action)
        case(actionTypes.REMOVE_INGREDIENT):return removeIngredient(state,action)
        default:
            return state

    }
}
export default reducer;