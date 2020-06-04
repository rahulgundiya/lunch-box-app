import * as actionTypes from '../actions/actionTypes'
import {updatedObject} from './utility'

const initialState={
    orders:[],
    loading:false,
    purchased:false
}

const purchaseLunchStart=(state,action)=>{
    return updatedObject(state,{loading:true})
}
const purchaseLunchSuccess=(state, action )=>{
    const newOrder=updatedObject(action.orderData , {id:action.orderId})
    return updatedObject(state,{
        loading:false,
        purchased:true,
        orders:state.orders.concat(newOrder)

    })
}
const purchaseLunchFail=(state,action)=>{
    return updatedObject(state,{loading:false})
}


const reducer=(state=initialState , action)=>{
    switch (action.type){
        case actionTypes.PURCHASE_LUNCH_START:return purchaseLunchStart(state,action)
        case actionTypes.PURCHASE_LUNCH_SUCCESS:return purchaseLunchSuccess(state,action)
        case actionTypes.PURCHASE_LUNCH_FAIL:return purchaseLunchFail(state,action)
        default:return state;
    }
}
export default reducer;