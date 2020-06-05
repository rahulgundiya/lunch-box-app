import * as actionTypes from './actionTypes';
import axios from '../../axios-order'

export const purchaseLunchSuccess=(id,orderData)=>{
    return {
        type:actionTypes.PURCHASE_LUNCH_SUCCESS,
        order:id,
        orderData:orderData
    }
}
export const purchaseLunchFail =(error)=>{
    return {
        type:actionTypes.PURCHASE_LUNCH_FAIL,
        error:error
    }
}
export const purchaseLunchStart=()=>{
    return {
        type:actionTypes.PURCHASE_LUNCH_START
    }
}
export const purchaseLunch=(orderData)=>{
    return dispatch=>{
        dispatch(purchaseLunchStart());
        axios.post('/orders.json' , orderData)
        .then(response=>{
            console.log('Data submitted' , response.data)
            dispatch(purchaseLunchSuccess(response.data.name ,orderData))
        })
        .catch(error=>{
            dispatch(purchaseLunchFail(error))
        })
    }
}
export const fetchOrdersSuccess=(orders)=>{
    return {
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    }
}
export const fetchOrdersStart=()=>{
    return {
        type:actionTypes.FETCH_ORDERS_START
    }
}
export const fetchOrders=()=>{
    return dispatch=>{
        dispatch(fetchOrdersStart())
        axios.get('/orders.json')
        .then(response=>{
            console.log('myOrders' , response.data)
            const fetchOrders=[];
            for(let key in response.data)
            {
                fetchOrders.push({
                    ...response.data[key],
                    id:key})
                }
                dispatch(fetchOrdersSuccess(fetchOrders))

                })
    }
}
