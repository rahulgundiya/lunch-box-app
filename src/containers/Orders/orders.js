import React, { Component } from 'react'
import axios from '../../axios-order'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionTypes from '../../store/actions/Index'
import FetchOrders from '../../components/orders/fetchOrders'

//let ingredients=[];
class Orders extends Component {
    state =
        {
            orders: [],
            ingredients: []
        }
    componentDidMount() {
        this.props.onFetchOrders()
        // const fetchData=[]
        // axios.get('https://lunch-app-cf664.firebaseio.com/orders.json')
        // .then(res=>{
        //     for(let key in res.data)
        //     {
        //       fetchData.push({  ...res.data[key], 
        //         id:key})
        //     }
        //     this.setState({orders:fetchData})
        // })

        //  const myOrder={}

    }
    

    // static getDerivedStateFromProps(nextprops, state) {
    //     if (nextprops.orders !== state.orders && nextprops.orders[0]) {
    //         return {
    //             orders: nextprops.orders[0],
    //             ingredients: nextprops.orders[0].ingredients
    //         }
    //     }
    //     return null;
    // }

    // tifOptions = Object.keys(this.state.ingredients).forEach(function (key) {
    //     return <li value={key}>{this.state.ingredients[key]}</li>
    // });

    render() {
        let orders=<Spinner/>
        if(!this.props.loading)
        {
            orders=this.props.orders.map((order)=>(
                <FetchOrders key ={order.id}
                ingredients={order.ingredients}
                price={order.totalPrice}
                form={order.form} 
                />
            ))
        }



        return (

            <div>
               {orders}
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        orders: state.ordersReducers.orders,
        loading: state.ordersReducers.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actionTypes.fetchOrders())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders, axios);