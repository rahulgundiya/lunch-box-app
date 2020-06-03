  import * as actionTypes from './actionTypes'
  import axios from '../../axios-order'
  export const addIngredient=(name)=>{
      return {
          type:actionTypes.ADD_INGREDIENT,
          ingredientName:name
      }
  }  
  export const removeIngredient=(name)=>{
      return {
          type:actionTypes.REMOVE_INGREDIENT,
          ingredientName:name
      }
  }
  export const setIngredients=(ingredients)=>{
      return {
          type:actionTypes.SET_INGREDIENTS,
          ingredients:ingredients
      }
  }
  export const initIngredients=()=>{
      return dispatch=>{
          axios.get('https://lunch-app-cf664.firebaseio.com/ingredients.json')
          .then(response=>{
              console.log('Set-Ingredients' ,response.data)
              dispatch(setIngredients(response.data))
          })
      }
  }
export const setTotalPrice=(totalPrice)=>{
    return {
        type:actionTypes.SET_TOTALPRICE,
        totalPrice:totalPrice
    }

}
  export const initTotalPrice=()=>{
      return dispatch=>{
          axios.get('https://lunch-app-cf664.firebaseio.com/totalPrice.json')
          .then(response=>{
              dispatch(setTotalPrice(response.data))
          })
      }

  }