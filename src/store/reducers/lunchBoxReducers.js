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
    INGREDIENT_PRICES:null
}
const addIngredient=(state,action)=>{
    const updatedIngredient ={[action.ingredientName]:state.ingredients[action.ingredientName]+1}
    const updatedIngredients=updatedObject(state.ingredients,updatedIngredient);
    const updatedState={
        ingredients:updatedIngredients
    }
    return updatedObject(state,updatedState);
}
const removeIngredient=(state,action)=>{
    const updatedIngredient ={[action.ingredientName]:state.ingredients[action.ingredientName]-1}
    const updatedIngredients=updatedObject(state.ingredients,updatedIngredient);
    const updatedState={
        ingredients:updatedIngredients
    }
    return updatedObject(state,updatedState);
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