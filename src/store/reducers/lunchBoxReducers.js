import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from './utility'
let initialState = {
    ingredients: {},
    totalPrice: 0,
    error: false,
    show: false,
    INGREDIENT_PRICES: {}
}
const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updatedObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + state.INGREDIENT_PRICES[action.ingredientName],
        show: true
    }
    return updatedObject(state, updatedState);
}
const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updatedObject(state.ingredients, updatedIng);
    let updatedSt = {}

    updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - state.INGREDIENT_PRICES[action.ingredientName],

    }
    if (updatedSt.totalPrice === 0) {
        updatedSt = {
            ingredients: updatedIngs,
            totalPrice: state.totalPrice - state.INGREDIENT_PRICES[action.ingredientName],
            show: false
        }
    }
    console.log('updatedObject', updatedObject(updatedSt))
    //console.log('Show' ,initialState.show)
    return updatedObject(state, updatedSt)
}
const setIngredients = (state, action) => {
    console.log('Server Data', action.ingredients)
    return updatedObject(state, {
        ingredients: {
            chanval: action.ingredients.chanval,
            daal: action.ingredients.daal,
            panner: action.ingredients.panner,
            parathe: action.ingredients.parathe,
            rooti: action.ingredients.rooti
        },
        totalPrice: 0
    })
}
const setTotalPrice = (state, action) => {
    return updatedObject(state, {
        INGREDIENT_PRICES: {
            chanval: action.totalPrice.chanval,
            daal: action.totalPrice.daal,
            panner: action.totalPrice.panner,
            parathe: action.totalPrice.parathe,
            rooti: action.totalPrice.rooti
        }
    })
}
const Hide=(state)=>{
    const updateShow={
        show:false
    }
    return updatedObject (state ,updateShow)
    
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.ADD_INGREDIENT): return addIngredient(state, action)
        case (actionTypes.REMOVE_INGREDIENT): return removeIngredient(state, action)
        case (actionTypes.SET_INGREDIENTS): return setIngredients(state, action)
        case (actionTypes.SET_TOTALPRICE): return setTotalPrice(state, action)
        case (actionTypes.HIDE): return Hide(state ,action)
        default:
            return state
    }
}
export default reducer;